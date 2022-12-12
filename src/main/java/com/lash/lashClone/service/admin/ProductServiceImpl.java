package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.domain.ProductImg;
import com.lash.lashClone.dto.admin.ProductListRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.dto.admin.ProductUpdateReqDto;
import com.lash.lashClone.exception.CustomInternalServerErrorException;
import com.lash.lashClone.repository.admin.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Value("${file.path}")
    private String filePath;
    private final ProductRepository productRepository;

    // 상품 등록
    @Override
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {

        int result = 0;

        List<MultipartFile> files = productRegistReqDto.getProductImgs();
        List<ProductImg> productImgs = null;

        Product product = productRegistReqDto.toProduct();
        result = productRepository.saveProduct(product);

        if(files != null) {
            int productId = product.getProduct_id();
            productImgs = getProductImgs(files, productId);
            productRepository.saveImgs(productImgs);
        }

        if(result == 0) {
            return false;
        }

        return true;
    }


    // 상품 이미지 등록
    private List<ProductImg> getProductImgs(List<MultipartFile> files, int productId)throws Exception {
        List<ProductImg> productImgs = new ArrayList<ProductImg>();

        files.forEach(file -> {
            String originName = file.getOriginalFilename();

            Path uploadPath = Paths.get(filePath + "/product/" + originName);

            File f = new File(filePath + "/product");
            if(!f.exists()) {
                f.mkdirs();
            }

            try {
                Files.write(uploadPath, file.getBytes());
            }catch (IOException e) {
                throw new RuntimeException(e);
            }

            ProductImg productImg = ProductImg.builder()
                    .product_id(productId)
                    .img_name(originName)
                    .build();

            productImgs.add(productImg);

        });

        return productImgs;
    }


        // 등록된 상품(리스트) 불러오기
        @Override
        public List<ProductListRespDto> productList(String category, String searchValue) throws Exception {
            Map<String, Object> paramsMap = new HashMap<String, Object>();
            paramsMap.put("category", category);
            paramsMap.put("searchValue", searchValue);



            List<ProductListRespDto> list = new ArrayList<ProductListRespDto>();

            productRepository.productList(paramsMap).forEach(product -> {
                list.add(product.productListRespDto());
            });

            return list;
        }

    @Override
    public boolean updateProduct(ProductUpdateReqDto productUpdateReqDto) throws Exception {
        System.out.println(productUpdateReqDto);
        boolean status = false;

        int result = productRepository.updateProduct(productUpdateReqDto.productEntity());

        if(productUpdateReqDto.getAddImgFiles() != null || productUpdateReqDto.getDeleteImgFiles() != null) {
            status = true;
            boolean addStatus = true;
            boolean deleteStatus = true;

            if(productUpdateReqDto.getAddImgFiles() != null) {
                System.out.println("addImg");
                addStatus = addProductImg(productUpdateReqDto.getAddImgFiles(), productUpdateReqDto.getProductId());
            }

            if(productUpdateReqDto.getDeleteImgFiles() != null) {
                System.out.println("deleteImg");
                deleteStatus = deleteProductImg(productUpdateReqDto.getDeleteImgFiles(), productUpdateReqDto.getProductId());
            }

            status = status && addStatus && deleteStatus;

            if(status == false) {
                throw new CustomInternalServerErrorException("수정 오류 발생!");
            }

        }

        return status;
    }

    private boolean addProductImg(List<MultipartFile> files, int productId) throws Exception {
            boolean status = false;
            List<ProductImg> productImgs = getProductImgs(files, productId);
            return productRepository.saveImgs(productImgs) > 0;
        }

        private boolean deleteProductImg(List<String> deleteImgFiles, int productId) throws Exception {
            boolean status = false;

            Map<String, Object> map = new HashMap<String, Object>();
            map.put("productId", productId);
            map.put("deleteImgFiles", deleteImgFiles);

            int result = productRepository.deleteImgFiles(map);

            if(result != 0) {
                deleteImgFiles.forEach(img_name -> {
                    Path uploadPath = Paths.get(filePath + "/product/" + img_name);

                    File file = new File(uploadPath.toUri());
                    if(file.exists()) {
                        file.delete();
                    }
                });
                status = true;
            }
            return status;
        }

    @Override
    public boolean deleteProduct(int productId) throws Exception {

        List<ProductImg> productImgs = productRepository.getProductImgList(productId);

        if(productRepository.deleteProduct(productId) > 0) {
            productImgs.forEach(productImg -> {
                Path uploadPath = Paths.get(filePath + "/product/" + productImg.getImg_name());

                File file = new File(uploadPath.toUri());
                if(file.exists()) {
                    file.delete();
                }
            });
            return true;
        }
        return false;
    }



}


























