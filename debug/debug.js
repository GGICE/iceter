import Iceter from "../src/Iceter"

(function(){
  var menuEl = document.querySelector('.menu')
  var editor = new Iceter({
    el: '#app'
  })

  window.editor = editor
  editor.setContent(`
# 桃花源记（节选）
朝代：魏晋作者：[陶渊明](https://ice.gs/)  

* * *

晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷，渔人甚异之。 复前行，欲穷其林。 林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。 土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。 黄发垂髫，并怡然自乐。 ![](https://ice.gs/content/images/2017/05/berries-221193.jpg)

## 注释

*   穷（古义：穷尽；今义：贫穷）
*   从来（古义：从哪里来；今义：向来）
*   无论（古义：不要说，（更）不必说；今义：多为连词，表示条件不同而结果不变，不管）

`)

  menuEl.addEventListener('mousedown', function(e){
    var doCmd = e.target.dataset.do
    var result

    e.preventDefault()

    switch (doCmd) {
      case 'insertImage':
        result = window.prompt('请输入图片地址', 'https://ice.gs/content/images/2017/05/berries-221193.jpg');
        editor[doCmd](result)
        break
      case 'insertUrl':
        result = window.prompt('请输入链接地址', 'https://ice.gs/');
        editor[doCmd](result)
      default:
        break
    }
  });
})()
