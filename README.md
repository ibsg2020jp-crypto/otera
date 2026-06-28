# otera

四天王寺・六時堂を俯瞰で眺めるための小さなWebアプリです。

現地で見たときに「修復したのに、あまり綺麗になっていない？」と感じる違和感を、文化財の保存修理という視点から読み解けるようにしました。

## できること

- 六時堂周辺を概念俯瞰図で見る
- 表示モードを切り替える
  - 全体
  - 瓦屋根
  - 構造
  - 修復
- 屋根・床下・飾り金物・石舞台をタップして説明を読む
- スマホでも閲覧可能

## ファイル構成

```text
.
├── index.html   # 画面本体
├── styles.css   # 見た目
├── app.js       # タップ操作・表示切替
└── README.md
```

## GitHub Pagesで公開する方法

1. GitHubのリポジトリ画面を開く
2. `Settings` を開く
3. 左メニューの `Pages` を開く
4. `Build and deployment` の `Source` を `Deploy from a branch` にする
5. `Branch` を `main`、フォルダを `/root` にする
6. `Save`

数十秒から数分後に、GitHub PagesのURLが表示されます。

## 注意

このアプリの図は、正確な測量図ではなく、現地鑑賞のための概念図です。六時堂・石舞台・亀池の位置関係や、保存修理の見どころを理解しやすくすることを目的にしています。

## 参考

- [大林組：大阪・四天王寺の保存修理で後世に伝統建築をつなぐ](https://www.obayashi.co.jp/thinking/detail/project91.html)
- [四天王寺：境内ご案内](https://www.shitennoji.or.jp/map.html)
