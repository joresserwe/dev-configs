// https://github.com/toss/slash
module.exports = {
  presets: [
    // ECMAScript2015 이상의 버전 코드를 그 이전으로 변환한다
    require.resolve('@babel/preset-env'),
    // TypeScript코드를 Javascript 코드로 변환한다
    require.resolve('@babel/preset-typescript'),
    // React JSX 구문을 JS로 변환한다. (automatic은 새로운 JSX 변환 방식으로, import React from 'react'를 사용하지 않아도 괜찮다.
    [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
  ],
  plugins: [
    // Class의 Field에 변수 선언하는 것을 지원한다.
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true }, // 단순한 필드 할당이 된다. false의 경우 Object.defineProperty를 사용한다.
    ],

    // private Method(#)을 지원한다
    [
      require.resolve('@babel/plugin-proposal-private-methods'),
      { loose: true }, // Babel 변환시 완전한 private을 지원하진 않는다(성능이 좋을 수 있다)
    ],
    // private Field(#)을 지원한다
    [
      require.resolve('@babel/plugin-proposal-private-property-in-object'),
      { loose: true }, // Babel 변환시 완전한 private을 지원하진 않는다(성능이 좋을 수 있다)
    ],
    // 숫자 구분자 (1_000_000)을 사용할 수 있게 한다.
    require.resolve('@babel/plugin-proposal-numeric-separator'),
  ],

  // 상위 폴더 등 bable 설정 파일을 확장한다
  extends: "./babel.config.js"
};
