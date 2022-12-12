jQuery(document).ready(function() {             
    var storedFiles = [];      
    //$('.cvf_order').hide();
    
    // Apply sort function 
    function cvf_reload_order() {
        var order = $('.cvf_uploaded_files').sortable('toArray', {attribute: 'item'});
        $('.cvf_hidden_field').val(order);
    }
    
    function cvf_add_order() {
        $('.cvf_uploaded_files li').each(function(n) {
            $(this).attr('item', n);
        });
        console.log('test');
    }
    
    
    $(function() {
        $('.cvf_uploaded_files').sortable({
            cursor: 'move',
            placeholder: 'highlight',
            start: function (event, ui) {
                ui.item.toggleClass('highlight');
            },
            stop: function (event, ui) {
                ui.item.toggleClass('highlight');
            },
            update: function () {
                //cvf_reload_order();
            },
            create:function(){
                var list = this;
                resize = function(){
                    $(list).css('height','auto');
                    $(list).height($(list).height());
                };
                $(list).height($(list).height());
                $(list).find('img').load(resize).error(resize);
            }
        });
        $('.cvf_uploaded_files').disableSelection();
    });
            
    $('body').on('change', '.user_picked_files', function() {
        
        var files = this.files;
        var i = 0;
                    
        for (i = 0; i < files.length; i++) {
            var readImg = new FileReader();
            var file = files[i];
            
            if (file.type.match('image.*')){
                storedFiles.push(file);
                readImg.onload = (function(file) {
                    return function(e) {
                        $('.cvf_uploaded_files').append(
                        "<li file = '" + file.name + "'>" +                                
                            "<img class = 'img-thumb' src = '" + e.target.result + "' />" +
                            "<a href = '#' class = 'cvf_delete_image' title = 'Cancel'><img class = 'delete-btn' src = 'delete-btn.png' /></a>" +
                        "</li>"
                        );     
                    };
                })(file);
                readImg.readAsDataURL(file);
                
            } else {
                alert('the file '+ file.name + ' is not an image<br/>');
            }
            
            if(files.length === (i+1)){
                setTimeout(function(){
                    cvf_add_order();
                }, 1000);
            }
        }
    });
    
    // Delete Image from Queue
    $('body').on('click','a.cvf_delete_image',function(e){
        e.preventDefault();
        $(this).parent().remove('');       
        
        var file = $(this).parent().attr('file');
        for(var i = 0; i < storedFiles.length; i++) {
            if(storedFiles[i].name == file) {
                storedFiles.splice(i, 1);
                break;
            }
        }
        
        //cvf_reload_order();
        
    });
            
    // AJAX Upload
    $('body').on('click', '.cvf_upload_btn', function(e){
        
        e.preventDefault();
        cvf_reload_order();
        
        //$(".cvf_uploaded_files").html('<p><img src = "loading.gif" class = "loader" /></p>');
        var data = new FormData();
        
        var items_array = $('.cvf_hidden_field').val();
        var items = items_array.split(',');
        for (var i in items){
            var item_number = items[i];
            data.append('files' + i, storedFiles[item_number]);
        }
            
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            contentType: false,
            data: data,
            processData: false,
            cache: false,
            success: function(response, textStatus, jqXHR) {
                //$(".cvf_uploaded_files").html('');                                               
                //bootbox.alert('<br /><p class = "bg-success">File(s) uploaded successfully.</p>');
                alert(jqXHR.responseText);
            }
        });
        
    });        
});