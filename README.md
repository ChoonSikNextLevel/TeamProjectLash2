# Lash-TeamProject
```
팀프로젝트로 Lash라는 쇼핑사이트를 선정했습니다.
Lash는 안경브랜드 쇼핑사이트 입니다.
```
# 팀원소개
+ 이승환
    + 화면설계 디자인
    + 백엔드 구현
    + CAMPAIGN
    + COLLECTION
    + 관리자 기능
    + 전체페이지취합정리
    
+ 전나경
    + 화면설계 디자인
    + 백엔드 구현
    + DB구조 및 연계
    + 제품 상세 페이지
    + 관리자 기능
    + 결제 기능
+ 최준호
    + 화면설계 디자인
    + 백엔드 구현
    + DB구조 및 연계
    + 로그인(oauth2 포함)
    + MYPAGE
    + 배송지 관리
+ 문창배
    + 화면설계 디자인
    + 백엔드 구현
    + 메인페이지 디자인
    + 로그인(oauth2 포함)
    + 주문내역 조회
    +장바구니
# DATABASE ERD
![화면 캡처 2022-12-20 203519](https://user-images.githubusercontent.com/93910053/208658018-3bef7be8-e11d-4ffd-afc8-13fdd3f29282.jpg)

# 기술스택

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> <img src="https://img.shields.io/badge/IntelliJ IDEA-E34F26?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white">

<img src="https://img.shields.io/badge/Visual Studio Code-1572B6?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/Apache Tomcat-F7DF1E?style=for-the-badge&logo=Apache Tomcat&logoColor=white">

<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">

# 구현한 주요기능
+ 관리자 페이지

    + 상품 등록/삭제/수정 
    + 주문배송 관리
    + 배송상황 및 결제 관리
+ 제품 페이지
    + 제품 종류
    + 제품 상세정보
    + 장바구니 등록
    + 비회원 상품 구매
+ 마이 페이지
    + 주문 현황 확인
    + 주문 내역조회/기간조회/상태조회
    + 회원정보 수정/삭제
    + 배송주소록 조회/등록/삭제
+ 로그인 페이지
    + 회원가입 및 로그인
    + OAUTH2

# 프로젝트 배포 및 기존 사이트
+ [기존 사이트](https://www.lasheyewear.com/index.html)
+ [프로젝트 사이트](http://43.200.236.80:8000/index)

프로젝트 진행 과정에서 기존 사이트 변경이 4~5번 정도 발생했습니다.

저희가 작업한 프로젝트는 기존 변경전 사이트입니다. 

# 주요 구현 기능
> 메인페이지

![그림1](https://user-images.githubusercontent.com/93910053/208616516-e20e3fdd-b63f-4780-bf76-1c084986d2cd.png)
<br>

> 로그인페이지

![그림2](https://user-images.githubusercontent.com/93910053/208616698-ab97a9ec-e3eb-4d12-a943-a48a9d38ecb6.png)
<br>

> 회원가입페이지

![화면 캡처 2022-12-20 172728](https://user-images.githubusercontent.com/93910053/208619297-de19cc27-0e7c-40f9-a335-e9c3b54e1fd2.png)
<br>

> 회원가입 실패

![화면 캡처 2022-12-20 174232](https://user-images.githubusercontent.com/93910053/208622592-ec4d0cd5-65f6-4d21-a097-eab42fc9dd2e.png)
```
회원가입에서 실패하면 실패한 이유에 대해서 뜨게 되어있습니다.
```
<br>

> 소셜 로그인

![화면 캡처 2022-12-20 175722](https://user-images.githubusercontent.com/93910053/208625794-54b1e8fb-4252-422a-a252-49fb5ab41b83.png)
```
소셜 로그인은 네이버,페이스북,카카오로 회원가입하여 사용가능합니다.
```
<br>

> 제품 페이지

![화면 캡처 2022-12-20 184725](https://user-images.githubusercontent.com/93910053/208636329-83a98d2f-f7ea-4d40-b447-9ba507b63a01.jpg)
```
제품밑에 번호를 클릭하면 같은 제품에 색상만 다른 제품으로 변경됩니다.
```
<br>

> 제품 페이지-제품상세

![화면 캡처 2022-12-20 185046](https://user-images.githubusercontent.com/93910053/208637034-d8c51b88-8516-414e-956b-10ed4ec0d345.jpg)
```
장바구니를 누르면 제품이 장바구니에 들어갑니다.
카카오페이를 클릭하면 즉시 카카오페이 결제페이지로 이동합니다.
BUY NOW를 클릭하면 일반결제,카카오결제,토스결제가 가능한 페이지로 이동합니다.
```
<br>

> 장바구니 페이지

![화면 캡처 2022-12-20 185908](https://user-images.githubusercontent.com/93910053/208639418-6d8ade49-ace6-4365-b719-045553d685d3.jpg)
```
장바구니에 담기를 누른 제품들이 들어오고 장바구니안에서는 제품에 개수를 증가/감소/삭제가 가능합니다.
```
> 장바구니 페이지-결제

![화면 캡처 2022-12-20 190649](https://user-images.githubusercontent.com/93910053/208640866-ffc5c8c3-74c2-4cdb-9895-980718768afa.jpg)
```
결제하기전 필요없는 제품은 삭제가능합니다.
```
<br>

> 장바구니 페이지-카카오,일반 결제

![화면 캡처 2022-12-20 191029](https://user-images.githubusercontent.com/93910053/208641879-805a959f-e40b-4e78-a9be-1f1c371ad07e.jpg)
![화면 캡처 2022-12-20 191053](https://user-images.githubusercontent.com/93910053/208642041-2f1675d3-c326-42eb-b844-594b0979e509.jpg)
<br>

<br>

> 마이 페이지-마이쇼핑

![화면 캡처 2022-12-20 192057](https://user-images.githubusercontent.com/93910053/208643767-668ea433-4000-4346-b503-5f14a4595331.jpg)
```
자신이 주문/결제를 한 제품에 대한 결제완료/배송완료/배송중 상태를 개수로 나타납니다.
```
<br>

<br>

> 마이 페이지-배송주소록

![화면 캡처 2022-12-20 193027](https://user-images.githubusercontent.com/93910053/208645794-6ed73eb4-e9fe-4828-a0cc-47c4b25b147e.jpg)
```
등록한 배송지를 나열합니다.
필요없는 배송지는 삭제가 가능합니다.
```
>마이 페이지-배송주소록등록
 
![화면 캡처 2022-12-20 192746](https://user-images.githubusercontent.com/93910053/208646015-5ce45627-d4be-431d-ae81-1a015601d675.jpg)
```
배송지등록이 가능합니다.
```
> 마이 페이지-회원정보관리
 
![화면 캡처 2022-12-20 193304](https://user-images.githubusercontent.com/93910053/208646532-28e60bbf-3e4a-4195-a6a0-ca63a45b602f.jpg)
```
자사 로그인은 비밀번호/휴대폰번호/이메일을 변경가능합니다.
소셜 로그인은 휴대폰번호만 등록/변경만 가능합니다.
```
> 마이 페이지-회원정보탈퇴

![화면 캡처 2022-12-20 193902](https://user-images.githubusercontent.com/93910053/208647472-470f2001-a238-4a92-be88-d94e59caa0f4.jpg)
```
회원탈퇴버튼을 클릭하면 회원 탈퇴가 가능합니다.
```
> 마이 페이지-주문내역조회

![화면 캡처 2022-12-20 194155](https://user-images.githubusercontent.com/93910053/208648271-b74a53b6-8377-4166-91a7-b616e4e97cd6.jpg)
```
자신이 주문한 주문내역을 볼 수 있게 되어있습니다.
```

![화면 캡처 2022-12-20 194255](https://user-images.githubusercontent.com/93910053/208648632-fa86bcfb-7b86-40b9-bf65-398ac6562cbd.jpg)
```
날짜에 따라서 자신에 주문내역을 확인할 수 있습니다.
```

![화면 캡처 2022-12-20 194219](https://user-images.githubusercontent.com/93910053/208649023-f6f74e0f-1d75-4cd3-a1cf-2dcb675a16e7.jpg)
```
주문상태에 따라서 자신에 주문내역을 확인할 수 있습니다.
```

>관리자 페이지-제품 리스트

![화면 캡처 2022-12-20 201251](https://user-images.githubusercontent.com/93910053/208653991-d0474d81-e40a-4b6d-8919-5ff8ff9d2c6b.jpg)
```
사이트에 올라온 모든 제품리스트 확인할 수 있습니다.
수정/삭제가 가능합니다.
```
![화면 캡처 2022-12-20 201700](https://user-images.githubusercontent.com/93910053/208654523-723fbac5-f7bb-4165-affe-e026adc3de9f.jpg)
```
제품리스트를 이름/컬러코드를 검색가능합니다.
```
![화면 캡처 2022-12-20 202001](https://user-images.githubusercontent.com/93910053/208655081-9b8056ce-47f0-40c1-9bb6-b5d466328787.jpg)
```
제품리스트에 종류에 따라 검색가능합니다.
```
> 관리자 페이지-제품등록

![화면 캡처 2022-12-20 202502](https://user-images.githubusercontent.com/93910053/208655930-2a97e522-0c60-48a5-a65f-abd67fe862c9.jpg)
```
제품을 등록가능합니다.
```

> 관리자 페이지-제품수정

![화면 캡처 2022-12-20 202152](https://user-images.githubusercontent.com/93910053/208655455-7f8d1b35-4dcd-4548-916e-720edd251c1a.jpg)
```
제품정보를 추가/수정가능합니다.
```
> 관리자 페이지-주문 및 배송관리

![화면 캡처 2022-12-20 202720](https://user-images.githubusercontent.com/93910053/208656488-b999a3b3-44e9-4e48-87d7-e9db6ea68fd1.jpg)
```
고객이 주문한 배송상태를 변경이 가능합니다.
```
![화면 캡처 2022-12-20 202942](https://user-images.githubusercontent.com/93910053/208656892-a449466a-9c2a-4626-95b0-cf00d286ba8c.jpg)
```
고객이 주문한 배송상태에 따라 조회 가능합니다
```
![화면 캡처 2022-12-20 203007](https://user-images.githubusercontent.com/93910053/208657008-6f6e6b0f-c93e-41f9-aebf-847724d640ef.jpg)
```
고객이 주문한 날짜에 따라 조회 가능합니다.
```
# 팀프로젝트 장점
> 코드/언어에 대한 이해도 상승<br>
우선 저희 팀 전체가 처음으로 하는 프로젝트여서 시작할 때 코드 부분에 대해서 많은 걱정이 있었습니다. 그런 과정에서 저희 팀은 서로서로 소통을 자주 하자는 저희 팀장님에 의견에 따라 각자의 코드에 대해서 분석 및 질문을 통해서 프로젝트를 잘 마무리할 수 있었으며 현재 각자가 개인 프로젝트를 시작할 수 있는 실력까지 도달했습니다.

> 큰 프로젝트에 대한 부담감 하락<br>
협력의 가장 큰 장점은 아무래도 프로젝트를 완성시키는 것에 있어 오는 압박감이 줄어드는 것입니다. 전체 할당량을 여러 파트로 쪼개서 작성하고 계획을 세우고 매주 각자의 목표량을 세워서 일을 또 쪼개고 보니 매주 나에게 주어진 할당량이 그렇게 부담스럽게 느껴지지 않습니다. 그런 중에도 혼자서 해결하지 부족한 부분에 대해서 직면하면 팀원들이 같이 고민해 주니깐 서로한테 부족한 부분을 채워나가는 느낌이 들어 부담감보다도 서로한테 많은 힘과 의지가 됩니다.

> 커뮤니케이션<br>
앞에 장점을 말할 때 많이 나왔지만 이 프로젝트를 하면서 저희 팀은 커뮤니케이션이 얼마나 중요한지에 대해서 많이 느꼈고 저희 팀은 커뮤니케이션 하나로 결과물과 진행속도가 달라지는 모습을 느꼈습니다.

# 팀 프로젝트 소감
> 이승환<br>
여전히 어렵고 프로젝트 완성도에 있어서 아쉬운 부분도 많지만, 그래도 뭔가 해냈다는 사실에 뿌듯합니다.<br>
끝까지 버티고 힘내 준 팀원들에게 고맙다는 말 전하고 싶습니다.

> 나경<br>
한 달 동안 즐겁게 작업한 것 같아 너무 좋았고<br>
수고해준 팀원들 에게도 굉장히 감사합니다.

>창배<br>
아무것도 모르고 프로젝트에 참가하게 되어서 걱정이 많았지만 팀원들이 잘 알려주며 잘 이끌어주어서 잘 마무리 할 수 있었던 것 같습니다. 첫 프로젝트라 아는 것도 없고 아쉬운 점이 많았지만 프로젝트를 무사히 끝마쳤다는 것이 뿌듯합니다.

>준호<br>
처음에는 막상 시작하려니 힘들 거 같고 저 자신이 할 수 있을까라는 고민을 했지만<br>
팀장님과 팀원들이 좋은 말을 해주고 이끌어줘서 요기까지 잘 마무리할 수 있었습니다

