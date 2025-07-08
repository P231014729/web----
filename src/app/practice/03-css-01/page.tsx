import Link from 'next/link';

export default function Page() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #F3E9D2 0%, #E6D5B8 100%)',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: '\'华文楷体\', \'KaiTi\', \'SimSun\', serif',
      color: '#4A3A28'
    }}>
      <Link href="/" style={{ color: '#6B4F2F', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>← 返回刘星余个人学习展示平台</Link>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        color: '#6B4F2F',
        margin: '2rem 0',
        position: 'relative',
        letterSpacing: '3px',
      }}>华夏物理先贤录</h1>
      
      <div className="scholar-container" style={{
        background: 'rgba(255,255,255,0.9)',
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '2rem 3rem',
        borderRadius: '5px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        borderLeft: '5px solid #8B7355',
        position: 'relative'
      }}>
        <h2 style={{
          fontFamily: '\'华文行楷\', \'STXingkai\', cursive',
          color: '#6B4226',
          fontSize: '2rem',
          margin: '1.5rem 0',
          paddingLeft: '1rem',
          borderLeft: '4px solid #B22222'
        }}>古代物理学大家</h2>
        
        <ul className="timeline" style={{
          listStyle: 'none',
          padding: 0,
          position: 'relative'
        }}>
          <li className="scholar" style={{
            padding: '1.5rem',
            margin: '2rem 0',
            background: '#FFFCF5',
            borderRadius: '3px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            position: 'relative',
            transition: 'transform 0.3s ease',
            border: '1px solid #E8DBC7'
          }}>
            <span className="dynasty" style={{
              display: 'inline-block',
              padding: '0.2rem 0.8rem',
              background: '#8B7355',
              color: 'white',
              borderRadius: '3px',
              fontSize: '0.9rem',
              marginRight: '1rem'
            }}>东汉</span>
            <strong>张衡</strong>（78-139）
            <div className="contribution" style={{
              color: '#6B4226',
              borderLeft: '3px solid #D4B78F',
              paddingLeft: '1rem',
              margin: '0.8rem 0'
            }}>
              创制浑天仪、候风地动仪，著《灵宪》阐述宇宙无限论，
              <span style={{ color: '#B22222', fontWeight: 'bold' }}>首次用科学方法解释月食成因</span>
            </div>
          </li>
          
          <li className="scholar" style={{
            padding: '1.5rem',
            margin: '2rem 0',
            background: '#FFFCF5',
            borderRadius: '3px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            position: 'relative',
            transition: 'transform 0.3s ease',
            border: '1px solid #E8DBC7'
          }}>
            <span className="dynasty" style={{
              display: 'inline-block',
              padding: '0.2rem 0.8rem',
              background: '#8B7355',
              color: 'white',
              borderRadius: '3px',
              fontSize: '0.9rem',
              marginRight: '1rem'
            }}>北宋</span>
            <strong>沈括</strong>（1031-1095）
            <div className="contribution" style={{
              color: '#6B4226',
              borderLeft: '3px solid #D4B78F',
              paddingLeft: '1rem',
              margin: '0.8rem 0'
            }}>
              《梦溪笔谈》记载磁偏角现象、声学共振实验，
              <span style={{ color: '#B22222', fontWeight: 'bold' }}>首创分层筑堰测量法</span>
            </div>
          </li>
          
          <li className="scholar" style={{
            padding: '1.5rem',
            margin: '2rem 0',
            background: '#FFF0F0',
            borderRadius: '3px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            position: 'relative',
            transition: 'transform 0.3s ease',
            border: '1px solid #B22222'
          }}>
            <span className="dynasty" style={{
              display: 'inline-block',
              padding: '0.2rem 0.8rem',
              background: '#8B7355',
              color: 'white',
              borderRadius: '3px',
              fontSize: '0.9rem',
              marginRight: '1rem'
            }}>战国</span>
            <strong>墨子</strong>（约前468-前376）
            <div className="contribution" style={{
              color: '#6B4226',
              borderLeft: '3px solid #D4B78F',
              paddingLeft: '1rem',
              margin: '0.8rem 0'
            }}>
              系统阐述光学成像原理、小孔成像实验，
              <span style={{ color: '#B22222', fontWeight: 'bold' }}>定义"力，形之所以奋也"的经典概念</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}