08.27(일)

원하는 API를 대략 적으로 만든후에는 클라이언트를 만드는데, 역시나 설정이 문제이다.
리엑트를 쓰는만큼 webpack을 잘 활용해보고 싶어서 react-hot-loader을 적용해 보는데 쉽지 않았다.
삽질한 만큼 적용하는데 성공했지만, 아직 정확히 알지 못하는 부분이 제법있다.

1. react-hot-loader 버전에 따라 다른 적용 방식

npm install react-hot-loader 을 해서 설치되면 1.3.0 가 설치되고
npm install react-hot-loader@next를 해서 설치되면 3.0.0-beta.7가 설치되는데.

1.3.0로 하는데 webpack.config.js에서 react-hot-loader/patch .babelrc에서 react-hot-loader/babel가 문제를 발생킨다.
적용하다 안되서 버전을 바꿨는데 작동한다..ㅠ 뭐가 문제인지 알기가 쉽지 않다

https://perfectacle.github.io/2017/03/25/react-hot-loader-3/
https://gaearon.github.io/react-hot-loader/getstarted/

2. server 실행을 nodemon에서 node로 변경했다.

dev 실행시 서버에서 webdevserver를 켜야하는데 nodemon으로 실행할경우 중첩으로 build가 되는 경우가 발생한다.

* 해봐야 할 것
  - webpack의 기능 및 발전 방향을 좀 이해할 필요가 있을것 같다.
    v3부터 이해하고자 하니 알 수가 없다. v1부터 좀 이해해보자.
 
