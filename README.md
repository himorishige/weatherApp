# お天気アプリ

このプロジェクトは現在地の天気情報、検索した地域の天気情報をOpenWeatherAPIから取得して表示するアプリケーションのソースコードになります。

![Weather App](https://user-images.githubusercontent.com/71954454/117394489-3b6a1b80-af31-11eb-8b3c-16ffac04c119.png)

## 動作に必要な外部サービス

OpenWeatherAPIの認証キー、Google Maps APIの認証キーが必要となります。

## 初期設定

動作に必要な設定について
`.env`

```bash:.env
SKIP_PREFLIGHT_CHECK=true // storybook用の記載
```

`.env.local`

```bash:.env.local
REACT_APP_OPENWEATHER_API_URL=OpenWeatherAPIのエンドポイント
REACT_APP_OPENWEATHER_API_KEY=OpenWeatherAPIのAPIキー
REACT_APP_OPENWEATHER_ICON_URL=https://openweathermap.org/img/wn // OpenWeatherAPIの画像ディレクトリへのパス
REACT_APP_GOOGLE_MAP_API_KEY=Google Maps APIのAPIキー
```

## 起動について

### yarn start

開発モードでアプリケーションを起動します。

### yarn storybook

Storybookを起動します。

### yarn test

jestを起動します。
