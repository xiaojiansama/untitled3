/**
 * Created by 小贱`sama on 2017/2/18.
 */
function ajax(url,data,fSucc,fFaild)
{

    var oAjax =new XMLHttpRequest();
    oAjax.open("POST",url,true);
    oAjax.send(data);
    oAjax.onreadystatechange=function () {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fSucc(oAjax.responseText)
            }
            else
            {
                if(fFaild)
                {
                    fFaild(oAjax.status)
                }
            }
        }
    }
}
