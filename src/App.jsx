import './App.css'

function App() {
  const menuItems = [
    {
      id: 1,
      name: '시그니처 라떼',
      description: '부드러운 우유와 에스프레소의 완벽한 조화',
      price: '5,500원',
      emoji: '☕'
    },
    {
      id: 2,
      name: '수제 티라미수',
      description: '매일 아침 직접 만드는 진한 마스카포네 티라미수',
      price: '7,000원',
      emoji: '🍰'
    },
    {
      id: 3,
      name: '아이스 아메리카노',
      description: '깔끔하고 깊은 풍미의 콜드브루 아메리카노',
      price: '4,500원',
      emoji: '🧊'
    },
    {
      id: 4,
      name: '베리 스무디',
      description: '신선한 믹스베리로 만든 상큼한 스무디',
      price: '6,500원',
      emoji: '🍓'
    },
    {
      id: 5,
      name: '크루아상',
      description: '버터 풍미 가득한 바삭한 크루아상',
      price: '4,000원',
      emoji: '🥐'
    },
    {
      id: 6,
      name: '말차 라떼',
      description: '교토산 말차로 만든 부드러운 라떼',
      price: '6,000원',
      emoji: '🍵'
    }
  ]

  return (
    <div className="cafe-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">☕ 카페 드림</div>
        <ul className="nav-links">
          <li><a href="#hero">홈</a></li>
          <li><a href="#menu">메뉴</a></li>
          <li><a href="#location">오시는 길</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Since 2020</span>
          <h1 className="hero-title">카페 드림</h1>
          <p className="hero-subtitle">
            일상 속 작은 쉼표,<br />
            당신만의 특별한 순간을 선물합니다
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">메뉴 보기</a>
            <a href="#location" className="btn btn-secondary">방문하기</a>
          </div>
        </div>
        <div className="hero-decoration">
          <span className="floating-emoji e1">☕</span>
          <span className="floating-emoji e2">🌿</span>
          <span className="floating-emoji e3">✨</span>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="section-header">
          <span className="section-badge">Our Menu</span>
          <h2 className="section-title">대표 메뉴</h2>
          <p className="section-description">
            엄선된 원두와 신선한 재료로 만든 카페 드림의 시그니처 메뉴를 만나보세요
          </p>
        </div>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-emoji">{item.emoji}</div>
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <span className="menu-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="location-section">
        <div className="section-header">
          <span className="section-badge">Visit Us</span>
          <h2 className="section-title">오시는 길</h2>
          <p className="section-description">
            카페 드림에서 여유로운 시간을 보내세요
          </p>
        </div>
        <div className="location-content">
          <div className="location-map">
            <div className="map-placeholder">
              <span className="map-icon">📍</span>
              <p>서울시 강남구 테헤란로 123</p>
            </div>
          </div>
          <div className="location-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>주소</h4>
                <p>서울시 강남구 테헤란로 123<br />드림빌딩 1층</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h4>영업시간</h4>
                <p>평일: 08:00 - 22:00<br />주말: 10:00 - 21:00</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>연락처</h4>
                <p>전화: 02-1234-5678<br />이메일: hello@cafedream.kr</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🚇</div>
              <div className="info-content">
                <h4>교통편</h4>
                <p>강남역 3번 출구<br />도보 5분 거리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">☕ 카페 드림</div>
          <p className="footer-text">
            © 2024 Cafe Dream. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">KakaoTalk</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
