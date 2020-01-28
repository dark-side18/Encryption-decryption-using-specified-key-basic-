<script type="text/javascript">
	function plaintocipher() {
    var input = document.getElementById("plain").value;
    if(input=="")
        alert("Text not available for Encryption!!");
    var txt="";
    var cnt=0;
    for(var i in input)
    {
        var y=input.charCodeAt(cnt++);
        if(y>=97&&y<=122)
        {
            txt+=(String.fromCharCode(122+97-y));
        }
        else if(y>=65&&y<=90)
        {
            txt+=(String.fromCharCode(90+65-y));
        }
        else
        {
            txt+=input[i];
        }
    }
    document.getElementById("cipher").value=txt;
}

    function ciphertoplain(){
        var input = document.getElementById("cipher").value;
        if(input=="")
        alert("Text not available for Decryption!!");
    var txt="";
    var cnt=0;
    for(var i in input)
    {
        var y=input.charCodeAt(cnt++);
        if(y>=97&&y<=122)
        {
            txt+=(String.fromCharCode(122+97-y));
        }
        else if(y>=65&&y<=90)
        {
            txt+=(String.fromCharCode(90+65-y));
        }
        else
        {
            txt+=input[i];
        }
    }
    document.getElementById("plain").value=txt;
    }
</script>