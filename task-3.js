
  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>Jagan Annamraju</title>
</head>
<body>
   <div class="container mt-5" id="container">
       <div class="row mb-2">
           <div class="col-12">
            <h1>
                Annamraju Jagan Mohan 
            </h1>
           </div>
       </div>
       <div class="row mb-4">
           <div class="col-12">
            <h5>A Tech Enthusiast and A fast learner</h5>
           </div>
       </div>
       <div class="row mb-4" id="details">
           <div class="col-3">
               <a href="mailto:jaganm127@gmail.com"><span><i class="fa fa-envelope-o" aria-hidden="true"></i></span><span>&nbsp;Email: </span> jaganm127@gmail.com</a>
           </div>
           <div class="col-3">
               <p><span><i class="fa fa-phone" aria-hidden="true"></i></span><span>&nbsp;Phone: </span> +91-7093270503</p>
           </div>
           <div class="col-3">
               <a href="https://www.linkedin.com/in/jagan-mohan-0752391a9" target="_blank"><span><i class="fa fa-linkedin" aria-hidden="true"></i>&nbsp;LinkedIn: https://www.linkedin.com/in/jagan-mohan-0752391a9/</span> </a>
           </div>
           <div class="col-3">
               <a href="https://github.com/jagan-Xtream" target="_blank"><span><i class="fa fa-github" aria-hidden="true"></i></span> <span>Github: </span> github.com/jagan-Xtream</a>
           </div>
       </div>

       <div class="insider">
          <div class="row">
            <div class="col-lg-6">
                <div class="skills mb-4">
                    <h3 class="mb-2 mt-4" style="color: dodgerblue;">Skills</h3>
                    <p>
                        <h5>Programming Languages</h5>  
                    </p>
                    <p>Basics in C & Java, HTML and CSS </p>
                       
                    </p>
                     <h5>Tools & Hardware</h5>
                 <p>   Microsoft Office, Visual Studio code,<br> Digital Design, PCB fabrication,<br> Circuit Design, Audino, AutoCad </p>
                
                      <h5>Management</h5>
                
                <p>
                        Program management & Public talking
                    </p>
                    <p>  <h5>Other Skills</h5>
                    Business Mathematics, SDLD, STLD</p>
                </div>
                <div class="projects">
                      <h3 class="mb-2 mt-4">Projects</h3>
                      <h5>Mini Project</h5>
                    <p>Water Wheel and Free energy device<br>NPTEL(Certification in IOT)</p>
                      <h5>Participated in</h5>
                    <p>The Hour of Code<br>Social Audict</p>
                </div>
               
                   
               </div class="col-lg-6">
            
                <div class="education mt-4 mb-2">
                    <h3>Education</h3>
                    <h5>Pragati Engineering College</h5>
                    <h6 style="color: grey;">JUL 2017 - JUL 2021 &nbsp;&nbsp;// Surampalem, Kakinada, India</h6>
                    <p>Bachelor of Technology in Electrical and Electronics Engineering with GPA of <strong>7.6</strong></p>
                    <h5>Aditya Junior College</h5>
                    <h6 style="color: grey;">JUL 2015 - JUL 2017 &nbsp;&nbsp;// Kakinada, India</h6>
                    <p>Class XII with a percentage of <strong>92</strong></p>
                    <h5>Bhashyam High School</h5>
                    <h6 style="color: grey;">JUL 2014 - JUL 2015 &nbsp;&nbsp;// Bapatla, India</h6>
                    <p>Class X with a CGPA of <strong>9.2</strong></p>
                </div>

                
                <div class="cert mt-4 mb-2">
                    <h3>Certifications</h3>
                    <p>Digital Marketing, Basics in Python from Udemy</p>
                    <h6 style="color: grey;">JULY 2020</h6>
                    <p>Basics of PLC, Visual Radar, Circuit Designing, PCB</p>
                    <h6 style="color: grey;">APR 2019</h6>
                    
                </div>
                <div class="interests mt-4">
                    <h3>Interests</h3>
                    <p>Ad-designing, Stock Markets, Music, Traveling, Books<br>and Playing Cricket & Badminton.</p>
                    <h5>Special Interests</h5>
                    <p>I'm pretty much passionate about IG business. <br> I've built a website with basics of Html and CSS which was uploaded in my Github.</p>
                </div>


                <div class="lang mt-4 mb-2">
                    <h3>Languages Known</h3>
                    <p>English, Telugu and Hindi</p>
        
                </div>
               </div>
          </div>
       </div>
   </div>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
   <script>
       var doc = new jsPDF()
       var el = document.querySelector('#container')
       doc.fromHTML(el, 15, 15);
       doc.save('op.pdf')
   </script>
</body>
</html>



// weather



<script>
    let weather = []
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then((data) => {
            let city_names = []
            data.forEach((i) => {
                if (i.capital !== "") {
                    city_names.push(i.capital)
                            }
            })

            
            city_names.forEach((city) => {
                fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=10484172d3f3f840db065fe5c44167fd')
            .then(res => res.json())
            .then((wd) =>
             {
                
                 weather.push(city +": "+ wd.main.temp)
                 
             }
        
        )
        .catch(err => console.log("Error:", err));
            })
        })
        .catch(err => console.log("Error:", err));
  
    
console.log(weather)



     






</script>
