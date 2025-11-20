const KEYWORD_DATA = {
  "생활·주방": [
    "전동칫솔 추천","프라이팬 세트","음식물처리기 추천","전기포트 스테인리스",
    "커피머신 가성비","키친타올 대용량","건조기 섬유유연제","전기그릴 추천",
    "믹서기 가정용","공기청정기 필터"
  ],
  "청소·정리": [
    "로봇청소기 추천","무선청소기 가성비","정리함 옷정리","욕실청소용품",
    "곰팡이 제거제","스팀다리미","창문청소기","먼지제거기"
  ],
  "건강·헬스": [
    "비타민C 추천","단백질 보충제","오메가3 추천","루테인 영양제",
    "혈압계 가정용","허리 보호대","마사지건 추천"
  ],
  "인테리어·가전": [
    "무드등 조명","미니 공기청정기","제습기 소형","전기히터 추천",
    "미니 가습기","캠핑 조명 랜턴","콘센트 멀티탭"
  ],
  "육아·키즈": [
    "아기물티슈 순한","기저귀 가격비교","아기띠 추천","유아세제 순한 성분",
    "유모차 가성비","아기침대 범퍼침대"
  ],
  "반려동물": [
    "강아지 사료 인기순","고양이 자동 화장실","강아지 패드 대용량","자동급식기"
  ],
  "뷰티·바디케어": [
    "앰플 추천","선크림 순한성분","레티놀 크림","헤어드라이기 전문가용",
    "헤어에센스 추천"
  ],
  "디지털·모바일": [
    "블루투스이어폰 추천","스마트워치 가성비","무선충전패드"
  ]
};

function App() {
  const [selectedKeyword, setSelectedKeyword] = React.useState(null);
  const detailRef = React.useRef(null);

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);

    // 자동 스크롤
    setTimeout(() => {
      if (detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const sampleProducts = [
    { name: "🔥 인기상품 1", url: "https://www.coupang.com" },
    { name: "⭐ 가성비 TOP", url: "https://www.coupang.com" },
    { name: "💎 프리미엄 제품", url: "https://www.coupang.com" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-6">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">
          쿠팡 황금키워드 TOP 50
        </h1>
        <p className="text-lg mt-3 text-gray-600">
          GrewTools 랜딩페이지 독립 버전
        </p>
      </section>

      {/* Keyword List */}
      <div className="max-w-4xl mx-auto space-y-10">
        {Object.keys(KEYWORD_DATA).map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {KEYWORD_DATA[category].map((keyword) => (
                <button
                  key={keyword}
                  className="bg-white shadow hover:shadow-lg transition p-4 rounded-xl border border-pink-200"
                  onClick={() => handleKeywordClick(keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyword Detail */}
      {selectedKeyword && (
        <div
          ref={detailRef}
          className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl border border-pink-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🔍 "{selectedKeyword}" 추천 상품
          </h3>

          <div className="space-y-4">
            {sampleProducts.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                className="flex justify-between items-center p-4 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200"
              >
                <span className="text-lg">{item.name}</span>
                <span className="text-sm text-pink-600">최저가 보기 →</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
