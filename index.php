<?php
/*
Plugin Name: Drunk Driving
*/
function drunk_shortcodes_init()
{
    function drunk_shortcode($atts = [], $content = null)
    {
        $content .= "<script>var oDrunkData= " . file_get_contents("https://data.cdc.gov/api/views/ebbj-sh54/rows.json?accessType=DOWNLOAD") . "</script>";
        $content .= <<<EOT
<div ng-app="drunk" ng-controller="drunk_controller">
    
    <nvd3 options="options" data="data"></nvd3>
    
    <br><a href="http://krispo.github.io/angular-nvd3/" target="_blank" style="float: right;">See more</a>
  </div>
EOT;
        return $content;
    }
    add_shortcode('drunk-driving-plugin', 'drunk_shortcode');
}
add_action('init', 'drunk_shortcodes_init');
// bring in external css resources
wp_register_style('your_css_and_js', "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.css");
wp_enqueue_style('your_css_and_js');
// bring in external javascript resources
wp_register_script( 'your_css_and_js1', "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js");
wp_enqueue_script('your_css_and_js1');
wp_register_script( 'your_css_and_js2', "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js");
wp_enqueue_script('your_css_and_js2');
wp_register_script( 'your_css_and_js3', "https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js");
wp_enqueue_script('your_css_and_js3');
wp_register_script( 'your_css_and_js4', "https://cdnjs.cloudflare.com/ajax/libs/angular-nvd3/1.0.5/angular-nvd3.min.js");
wp_enqueue_script('your_css_and_js4');
wp_register_script( 'your_css_and_js7', plugins_url('js/main.js',__FILE__ ));
wp_enqueue_script('your_css_and_js7');