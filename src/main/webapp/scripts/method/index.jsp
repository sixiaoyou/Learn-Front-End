<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript">
        function max(a,b){
            return a>b ? a:b
        }
        console.log(max(2,3));

        var func = max;
        console.log(func(5,7));

        function max1(){
            var maxValue = arguments[0];
            for(var i=0;i<arguments.length;i++){
                maxValue = max(maxValue,arguments[i]);
            }
            return maxValue;
        }

        console.log(max1(1,2,100,300,-8,-20));
        </script>
</head>
<body>

</body>
</html>