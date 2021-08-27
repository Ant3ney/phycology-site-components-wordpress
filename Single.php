<?php get_header(); ?>

<div class='blog-container'>
    <?php the_content() ?>
</div>
<script>
    let navLinks = document.querySelectorAll('nav a');
    
    for(let i = 0; i < navLinks.length; i++){
        let navLink = navLinks[i];
        console.log(navLink);
        navLink.classList.add('make-black');
    }
</script>
<?php get_footer(); ?>