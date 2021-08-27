<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MFT Anthony</title>

    <?php wp_head(); ?>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/mft-anthony">MFT Anthony</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost/mft-anthony/about-me/">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost/mft-anthony/contact-me/">Contact me</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
<!-- Start the Loop. -->
<?php 
            $args = array(
              'post_type'        => 'post',
            );
            Global $wpdb;
            $posts = $wpdb->get_results("SELECT ID, post_title, post_status FROM lmftat_posts WHERE post_type = 'post'");
            if($posts){
              for($i = 0; $i < count($posts); $i++){
                $currentPost = $posts[$i];
                if($currentPost->post_status == 'publish'){
                  ?> <li><a class="dropdown-item" href="<?php echo get_permalink($currentPost->ID); ?>"><?php echo $currentPost->post_title; ?></a></li> <?php
                }
              }
            }
            ?>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

            