# TypeScriptでファイル出力したい

## TypeScriptとNode.jsでやる方法
Node.jsのfsというパッケージを使う

### ソースコード
index.ts<br>
```
import * as fs from 'fs';

var filename = "output.txt";
var text = "なんか適当な文章";

try {
  fs.writeFileSync(filename, text);
  console.log("Save txt file -> "+filename);
}catch(e){
  console.log(e);
}
```

### 補足
Node.jsを使ったことがないなら以下を見ればわかる（はず）
TypeScriptとNode.jsでプログラムを作る方法<br>
<a href="https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49">https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49</a><br>


## 参考
- <a href="https://qiita.com/hokke/items/3d6854e7a7958ecf2103">https://qiita.com/hokke/items/3d6854e7a7958ecf2103</a>
- <a href="https://qiita.com/masaichi/items/536b0f36161354055526">https://qiita.com/masaichi/items/536b0f36161354055526</a>