1. `__dirname`
[#](https://nodejs.org/docs/latest/api/modules.html#modules_dirname)

현재 모듈의 디렉토리 이름을 나타냅니다.


2. `path.join([path1], [path2], [...])`
[#](http://nodejs.sideeffect.kr/docs/v0.10.0/api/path.html#path_path_join_path1_path2)

모든 아규먼트를 합쳐서 최종 경로로 정규화합니다. 문자열이 아닌 아규먼트는 무시한다.

```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// returns
'/foo/bar/baz/asdf'

path.join('foo', {}, 'bar')
// returns
'foo/bar'

```

3. `path.resolve([from ...], to)`
[#](http://nodejs.sideeffect.kr/docs/v0.10.0/api/path.html#path_path_resolve_from_to)

to를 절대경로로 변환한다.

to가 절대경로가 아니면 절대경로를 찾을 때까지 from 아규먼트들을 우측에서 좌측의 순서로 앞에 이어붙힌다.모든 from 경로를 사용한 후에도 절대경로를 찾지 못하면 현재 워킹 디렉토리를 사용한다. 최종 경로는 정규화되고 경로가 루트 디렉토리로 처리되지 않는한 마지막 슬래시는 제거한다. 문자열이 아닌 아규먼트는 무시한다.

이는 쉘에서 cd 명령어를 순서대로 실행한 것과 같다.


4. error : regeneratorRuntime is not defined
npm run dev시 발생 

'babel-polyfill' 적용
 
resolve : https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined