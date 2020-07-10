<html>

<head>
    <title>Admin Login</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
</head>

<body>

<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 mt-5 text-center">
            <div class="card mt-5 bg-success">
                <div class="card-body">
                    <h3>Admin Login</h3><hr>
                    <input id="userName" class="form-control" type="text" placeholder="User Name"><br>
                    <input id="password" class="form-control" type="password" placeholder="Password"><br>
                    <button id="loginBtn" onclick="AdminLogin()" class="btn btn-block btn-primary" type="submit">Login</button>
                </div>
            </div>

        </div>
    </div>
</div>

</div>


<script type="text/javascript">
    function AdminLogin() {
        let UserName= document.getElementById('userName').value;
        let Password= document.getElementById('password').value;
        let xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function () {
            if(this.readyState==4 && this.status==200){
                if(this.responseText=="1"){
                   window.location.href="/";

                }else{
                    alert("wrong username or password");

                }
            }

        }
        xhttp.open("GET", "/onLogin/"+UserName+"/"+Password, true);
        xhttp.send();
    }
</script>


</body>

</html>

