// ETF Data
const etfData = [
  {
    "rank": 1,
    "symbol": "VOO",
    "fullName": "バンガード・S&P 500 ETF",
    "expenseRatio": "0.03%",
    "dividendYield": "1.4%",
    "category": "米国大型株",
    "benchmark": "S&P 500指数",
    "fiveYearReturn": "16.3%",
    "recommendReason": "世界最高水準の低コストでS&P500に投資可能。バンガード社の優れた運用で高い信頼性。NISAで最も人気の高い米国ETF。",
    "pros": ["超低コスト（0.03%）", "高い流動性", "S&P500への完全連動", "四半期配当"],
    "cons": ["小型株は含まれない", "米国のみの投資", "為替リスクあり"],
    "suitableFor": "米国大型株への長期投資を希望する初心者～中級者",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約4万円",
    "score": 95
  },
  {
    "rank": 2,
    "symbol": "VTI",
    "fullName": "バンガード・トータル・ストック・マーケットETF",
    "expenseRatio": "0.03%",
    "dividendYield": "2.1%",
    "category": "米国全市場",
    "benchmark": "CRSP USトータル・マーケット・インデックス",
    "fiveYearReturn": "15.8%",
    "recommendReason": "米国株式市場全体（大型・中型・小型株）に分散投資可能。約4,000銘柄でリスク分散効果が高い。",
    "pros": ["米国市場100%カバー", "幅広い分散効果", "小型株も含む", "超低コスト"],
    "cons": ["VOOより若干値動きが大きい", "為替リスクあり", "少額投資に不向き"],
    "suitableFor": "米国市場全体への幅広い分散投資を希望する投資家",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約2.5万円",
    "score": 93
  },
  {
    "rank": 3,
    "symbol": "VYM",
    "fullName": "バンガード・米国高配当株式ETF",
    "expenseRatio": "0.06%",
    "dividendYield": "2.8%",
    "category": "高配当",
    "benchmark": "FTSEハイディビデンド・イールド・インデックス",
    "fiveYearReturn": "11.4%",
    "recommendReason": "米国の高配当株約400銘柄に分散投資。定期的な配当収入を重視する投資家に最適。財務健全性の高い企業が中心。",
    "pros": ["高い配当利回り", "約400銘柄に分散", "財務優良企業中心", "四半期配当"],
    "cons": ["キャピタルゲインは控えめ", "景気敏感株が多い", "成長株が少ない"],
    "suitableFor": "配当収入を重視する投資家、退職後の収入確保を目指す人",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約1.2万円",
    "score": 89
  },
  {
    "rank": 4,
    "symbol": "1489",
    "fullName": "NEXT FUNDS 日経平均高配当株50指数連動型上場投信",
    "expenseRatio": "0.31%",
    "dividendYield": "4.2%",
    "category": "日本株式",
    "benchmark": "日経平均高配当株50指数",
    "fiveYearReturn": "8.5%",
    "recommendReason": "日本の高配当株50銘柄に投資。為替リスクなしで高配当を享受可能。日本株ポートフォリオの中核ETF。",
    "pros": ["為替リスクなし", "高配当利回り", "日本円で取引可能", "税制優遇あり"],
    "cons": ["米国ETFより高い経費率", "成長性に限界", "50銘柄と分散が限定的"],
    "suitableFor": "日本株への投資を希望し、配当収入を重視する投資家",
    "nisaCompatibility": "成長投資枠・つみたて投資枠",
    "minInvestment": "約4,000円",
    "score": 85
  },
  {
    "rank": 5,
    "symbol": "QQQ",
    "fullName": "インベスコQQQトラストシリーズ1ETF",
    "expenseRatio": "0.20%",
    "dividendYield": "0.52%",
    "category": "米国テクノロジー",
    "benchmark": "NASDAQ-100指数",
    "fiveYearReturn": "18.2%",
    "recommendReason": "GAFAM等の米国ハイテク株100銘柄に集中投資。成長性の高いテクノロジーセクターへの投資機会。",
    "pros": ["高い成長性", "世界的IT企業に投資", "過去の高リターン", "流動性が高い"],
    "cons": ["ボラティリティが高い", "低配当", "セクター集中リスク", "景気敏感"],
    "suitableFor": "テクノロジーセクターの成長に期待し、リスクを取れる投資家",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約5万円",
    "score": 82
  },
  {
    "rank": 6,
    "symbol": "SPYD",
    "fullName": "SPDR ポートフォリオS&P 500高配当株式ETF",
    "expenseRatio": "0.07%",
    "dividendYield": "3.94%",
    "category": "高配当",
    "benchmark": "S&P500高配当指数",
    "fiveYearReturn": "9.8%",
    "recommendReason": "S&P500構成銘柄の中から高配当80銘柄を均等配分。4%超の高配当利回りが魅力。",
    "pros": ["非常に高い配当利回り", "均等配分でリスク分散", "低コスト", "四半期配当"],
    "cons": ["価格変動が大きい", "景気敏感銘柄が多い", "成長性は限定的"],
    "suitableFor": "配当収入を最優先する投資家、短期的な価格変動に耐えられる人",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約4,500円",
    "score": 80
  },
  {
    "rank": 7,
    "symbol": "1343",
    "fullName": "NEXT FUNDS 東証REIT指数連動型上場投信",
    "expenseRatio": "0.17%",
    "dividendYield": "4.57%",
    "category": "REIT",
    "benchmark": "東証REIT指数",
    "fiveYearReturn": "6.2%",
    "recommendReason": "日本の不動産投資信託（REIT）全銘柄に投資。インフレ対策と高配当の両方を実現可能。",
    "pros": ["インフレヘッジ効果", "高配当利回り", "為替リスクなし", "年4回分配"],
    "cons": ["金利上昇リスク", "不動産市況に左右", "成長性は限定的"],
    "suitableFor": "不動産投資に興味があり、高配当を求める投資家",
    "nisaCompatibility": "成長投資枠・つみたて投資枠",
    "minInvestment": "約1.9万円",
    "score": 78
  },
  {
    "rank": 8,
    "symbol": "VEA",
    "fullName": "バンガード・FTSE先進国市場ETF",
    "expenseRatio": "0.05%",
    "dividendYield": "2.9%",
    "category": "先進国株式",
    "benchmark": "FTSE先進国オールキャップ（米国除く）インデックス",
    "fiveYearReturn": "8.1%",
    "recommendReason": "米国を除く先進国株式に分散投資。ヨーロッパ、アジア太平洋地域の成長を取り込める。",
    "pros": ["地域分散効果", "低コスト", "幅広い先進国カバー", "米国以外の成長取込み"],
    "cons": ["米国株よりリターン低め", "為替リスクあり", "欧州経済の影響"],
    "suitableFor": "米国以外の先進国にも分散投資したい投資家",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約5,500円",
    "score": 75
  },
  {
    "rank": 9,
    "symbol": "AGG",
    "fullName": "iシェアーズ・コア米国総合債券ETF",
    "expenseRatio": "0.03%",
    "dividendYield": "4.2%",
    "category": "債券",
    "benchmark": "ブルームバーグ米国総合債券インデックス",
    "fiveYearReturn": "1.8%",
    "recommendReason": "米国債券市場全体に投資。株式との組み合わせでリスク軽減効果。現在の高金利環境で魅力的。",
    "pros": ["リスク軽減効果", "現在の高金利", "安定した配当", "株式との逆相関"],
    "cons": ["インフレリスク", "金利上昇リスク", "低成長性"],
    "suitableFor": "リスクを抑えた安定運用を希望する投資家",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約1.2万円",
    "score": 72
  },
  {
    "rank": 10,
    "symbol": "VWO",
    "fullName": "バンガード・FTSE・エマージング・マーケッツETF",
    "expenseRatio": "0.08%",
    "dividendYield": "2.8%",
    "category": "新興国株式",
    "benchmark": "FTSEエマージング・マーケッツ・オールキャップ・インデックス",
    "fiveYearReturn": "2.45%",
    "recommendReason": "中国、インド、台湾等の新興国株式に分散投資。長期的な経済成長期待が高い地域への投資機会。",
    "pros": ["高い成長ポテンシャル", "地域分散効果", "低コスト", "人口増加地域への投資"],
    "cons": ["高いボラティリティ", "政治リスク", "通貨リスク", "情報の入手困難"],
    "suitableFor": "長期的な新興国の成長に期待し、リスクを取れる投資家",
    "nisaCompatibility": "成長投資枠",
    "minInvestment": "約4,500円",
    "score": 70
  }
];

// Global variables
let currentFilter = 'all';
let currentSort = 'rank';
let filteredData = [...etfData];

// DOM elements
const rankingGrid = document.getElementById('ranking-grid');
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderETFCards();
    renderComparisonTable();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-category');
            applyFiltersAndSort();
        });
    });

    // Search input
    searchInput.addEventListener('input', function() {
        applyFiltersAndSort();
    });

    // Sort select
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        applyFiltersAndSort();
    });

    // Table header sorting
    const tableHeaders = document.querySelectorAll('th[data-sort]');
    tableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            currentSort = this.getAttribute('data-sort');
            sortSelect.value = currentSort;
            applyFiltersAndSort();
        });
    });
}

// Apply filters and sorting
function applyFiltersAndSort() {
    let data = [...etfData];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        data = data.filter(etf => {
            if (currentFilter === '米国株式') {
                return etf.category.includes('米国') || etf.category === '米国大型株' || etf.category === '米国全市場' || etf.category === '米国テクノロジー';
            }
            return etf.category === currentFilter;
        });
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        data = data.filter(etf => 
            etf.symbol.toLowerCase().includes(searchTerm) ||
            etf.fullName.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    data.sort((a, b) => {
        switch (currentSort) {
            case 'rank':
                return a.rank - b.rank;
            case 'expenseRatio':
                return parseFloat(a.expenseRatio) - parseFloat(b.expenseRatio);
            case 'dividendYield':
                return parseFloat(b.dividendYield) - parseFloat(a.dividendYield);
            case 'fiveYearReturn':
                return parseFloat(b.fiveYearReturn) - parseFloat(a.fiveYearReturn);
            default:
                return a.rank - b.rank;
        }
    });
    
    filteredData = data;
    renderETFCards();
    renderComparisonTable();
}

// Render ETF cards
function renderETFCards() {
    rankingGrid.innerHTML = '';
    
    filteredData.forEach(etf => {
        const card = createETFCard(etf);
        rankingGrid.appendChild(card);
    });
}

// Create individual ETF card
function createETFCard(etf) {
    const card = document.createElement('div');
    card.className = 'etf-card';
    
    const categoryClass = `category-${etf.category.replace(/\s+/g, '')}`;
    
    card.innerHTML = `
        <div class="card-header">
            <div class="etf-info">
                <h3><span class="etf-symbol">${etf.symbol}</span></h3>
                <p>${etf.fullName}</p>
                <span class="category-badge ${categoryClass}">${etf.category}</span>
            </div>
            <div class="rank-badge">${etf.rank}</div>
        </div>
        
        <div class="metrics-grid">
            <div class="metric">
                <div class="metric-value">${etf.expenseRatio}</div>
                <div class="metric-label">経費率</div>
            </div>
            <div class="metric">
                <div class="metric-value">${etf.dividendYield}</div>
                <div class="metric-label">配当利回り</div>
            </div>
            <div class="metric">
                <div class="metric-value">${etf.fiveYearReturn}</div>
                <div class="metric-label">5年リターン</div>
            </div>
        </div>
        
        <div class="recommend-reason">
            <strong>おすすめ理由:</strong> ${etf.recommendReason}
        </div>
        
        <div class="pros-cons">
            <div class="pros">
                <h4><i class="fas fa-check-circle"></i> メリット</h4>
                <ul>
                    ${etf.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            <div class="cons">
                <h4><i class="fas fa-times-circle"></i> デメリット</h4>
                <ul>
                    ${etf.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="suitable-for">
            <strong><i class="fas fa-user"></i> 適合投資家:</strong> ${etf.suitableFor}
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
            <span><strong>NISA対応:</strong> ${etf.nisaCompatibility}</span>
            <span><strong>最低投資額:</strong> ${etf.minInvestment}</span>
        </div>
    `;
    
    return card;
}

// Render comparison table
function renderComparisonTable() {
    tableBody.innerHTML = '';
    
    filteredData.forEach(etf => {
        const row = document.createElement('tr');
        
        const categoryClass = `category-${etf.category.replace(/\s+/g, '')}`;
        
        row.innerHTML = `
            <td><strong>${etf.rank}</strong></td>
            <td><strong>${etf.symbol}</strong></td>
            <td>${etf.fullName}</td>
            <td><span class="category-badge ${categoryClass}">${etf.category}</span></td>
            <td>${etf.expenseRatio}</td>
            <td>${etf.dividendYield}</td>
            <td>${etf.fiveYearReturn}</td>
            <td>${etf.nisaCompatibility}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Utility function to parse percentage strings for sorting
function parseFloat(value) {
    return parseFloat(value.replace('%', ''));
}