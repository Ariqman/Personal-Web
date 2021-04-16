const theme = document.getElementById("icon");
theme.onclick= function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
        theme.src="Assets/gambar/sun.png";}
    else{
        theme.src="Assets/gambar/moon.webp";
    }
    
}
