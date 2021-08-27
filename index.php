<?php get_header(); ?>
<?php the_content() ?>
<script>
    <?php if(is_front_page()){
        ?> 
         
    <?php }else{?> 
        makeNavBlack(); 
    <?php } ?>
    function makeNavBlack(){
        let navLinks = document.querySelectorAll('nav a');
    
        for(let i = 0; i < navLinks.length; i++){
            let navLink = navLinks[i];
            console.log(navLink);
            navLink.classList.add('make-black');
        }
    }
</script>
<?php get_footer(); ?>