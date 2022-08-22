import { useEffect, useState } from 'react';
import Parfum from './Parfum';
import ProductImg from './ProductImg';
import './ProductParfum.scss';
const ProductParfum = () => {
  const [data, setData] = useState([]);
  const [Newaside, setNewAside] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3000/data/parfum.json')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      });
  }, []);
  return (
    <div className="productParfum">
      <aside className={Newaside ? 'aside' : 'aside new'}>
        <h4>성분</h4>
        <div>
          <p>
            변성알코올, 정제수, 향료, 리모넨, 리날룰, 시트로넬올, 제라니올,
            유제놀, 아이소유제놀, 파네솔, 벤질알코올, 신남알, 시트랄,
            하이드록시시트로넬알, 벤질벤조에이트
          </p>
          <p>
            성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
            목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
          </p>
          <p>
            이솝은 PETA로부터 비건 인증을 받은 브랜드로 자체 안전성과 효능,
            지속가능성을 확인한 성분을 사용합니다.
          </p>
        </div>
      </aside>

      <div className="productMain">
        <div className="productContent">
          <div className="title">향수 . 로즈</div>
          {data.map(parfum => {
            return (
              <Parfum
                setNewAside={setNewAside}
                parfum={parfum}
                key={parfum.id}
              />
            );
          })}
        </div>
        <div className="productImg">
          {data.map(img => {
            return <ProductImg img={img.img} key={img.id} />;
          })}
        </div>
        <a href="/" className="usopp">
          <h1 className="titleName">Usopp</h1>
        </a>
      </div>
    </div>
  );
};
export default ProductParfum;
