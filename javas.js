      const aboutbtn = document.getElementById("aboutmebtn");
      console.log(aboutbtn);
      const about = document.getElementById("about12");
      aboutbtn.addEventListener("click", showAbout);
      function showAbout() {
        console.log("click");
        about.classList.remove("hidden");
        about.classList.add("block");
      }
      function showAbout() {
        about.classList.remove("block");
        about.classList.add("hidden");
      }
