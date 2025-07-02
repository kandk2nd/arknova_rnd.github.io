# memo
- 01 1day/week/month周期で移動or削除
- 02_calenderはカレンダーアプリへ
- 03 概要、状況、次に何をやるか、納期の4点
- 04_Pointerはnotionへ
- 05_waitは発生しないので省略。必要になったら追加する。
- 06 1時間以内に達成できそうで、かつ何をすればいいか明確で具体的に記載されたTODO
# 06_action
- Soulmask。部族布の為の職人確保
# 03_project
# 01_someday
# 00_inbox

# Flexのお話
display: flexで親とするやつ

## 以下子の属性
- flex-direction フレックスアイテムの並び方向(横並び・縦並び)を指定します。
  - デフォルトはrowだが、これを使う以上columnにすることが多そうなやつ。
- flex-wrap - フレックスアイテムの行替えの許可・禁止を制御します。
  - デフォルトnowrap。nowrap, wrap, wrap-reverseとあるやつ。
- flex-flow - flex-direction と flex-wrap をまとめて指定します。
  - 基本改行無しで考えているので、flex-directionしか普段使っていない。

- flex-grow - フレックスアイテムの幅(高さ)を引き延ばす割合を指定します。
- flex-shrink - フレックスアイテムの幅(高さ)を圧縮する割合を指定します。
- flex-basis - フレックスアイテムの幅(高さ)を指定します。
- flex - flex-grow, flex-shrink, flex-basis をまとめて指定します。
  - 並べる方向に対してのサイズになる。


- justify-content - フレックスアイテム間の横方向の余白を制御します。
  - 親に対しての寄せ方向。flex-end, center, flex-start
    - flex-direction: columnの場合は上下。rowの場合は左右となる。
  - 均等配置：space-betweeen, space-around, space-evenly
    - それぞれ端余白無し、端にアイテム間の半分の余白、端もアイテム間と同じ余白
    
- align-items - フレックスアイテムの並べ方(上寄せなど)を制御します。
  - 副方向で値はjustifyと一緒。
- align-content - フレックスアイテム間の縦方向の余白を制御します。
- order - フレックスアイテムを表示する順序を指定します。
