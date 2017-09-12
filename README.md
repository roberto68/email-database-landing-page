## HEADER

<form name="gform" id="gform" enctype="text/plain" style="font-size:19px;" action="https://docs.google.com/forms/d/1vwzz5AKuFw8L0r0EetYNmz8eX5BscRJ_AUVqb8goQuA/prefill" target="hidden_iframe" onsubmit="submitted=true;">
Email<br>
<input type="email" tabindex="-1" class="email-field" name="email" required id="entry.232219261" placeholder="Your email address..."><br><input type="submit" value="Submit">
</form>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>

<!-- form validation -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">var submitted=false;</script>
<script type="text/javascript">
  $('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(0);
  $('#gform').prepend('Thank you for subscribing! You will be notified when kampan is launched.');
  }); 
</script>

<!--mobile device form validation !-->
<script type="text/javascript"> 
function validateEmail(emailAddress) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress);
}
if (screen && screen.width < 780) {
function validate() {
  var emailValue = document.getElementById("entry.232219261").value;
  if (!validateEmail(emailValue)) {
   document.getElementById("entry.232219261").className += " red-border formInvalid";
    alert("Please provide a valid email address");
    document.getElementById("entry.232219261").removeAttribute("formInvalid")
    return false;
   }
  }
 }
$("#validate").bind("click", validate);
</script>

edit this page [editor on GitHub](https://github.com/roberto68/email-database-landing-page/edit/master/README.md)
Having trouble with Pages? Check out [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

