import List  from './list.tsx'
import Header from './header.tsx';
import './main.css'

export interface DemoData {
  id: number;
  name: string;
  mail: string;
  createdAt: Date;
  updatedAt?: Date;   // 更新日時（任意）
}

const demodatas:DemoData[] = [
  {id: 1, name: "山田 太郎", mail: "yamada@example.com", createdAt: new Date(2025, 0, 15), updatedAt: new Date(2025, 3, 4)},
  {id: 2, name: "佐藤 花子", mail: "sato@example.com", createdAt: new Date(2024, 10, 3)},
  {id: 3, name: "鈴木 一郎", mail: "suzuki@example.com", createdAt: new Date(2025, 2, 27)},
  {id: 4, name: "高橋 美咲", mail: "takahashi@example.com", createdAt: new Date(2024, 6, 9)},
  {id: 5, name: "田中 健", mail: "tanaka@example.com", createdAt: new Date(2024, 11, 30), updatedAt: new Date(2025, 1, 1)},
  {id: 6, name: "伊藤 純", mail: "ito@example.com", createdAt: new Date(2024, 9, 14)},
  {id: 7, name: "中村 智子", mail: "nakamura@example.com", createdAt: new Date(2025, 3, 3)},
  {id: 8, name: "小林 拓也", mail: "kobayashi@example.com", createdAt: new Date(2024, 8, 22)},
  {id: 9, name: "加藤 美優", mail: "kato@example.com", createdAt: new Date(2025, 1, 18)},
  {id: 10, name: "松本 大地", mail: "matsumoto@example.com", createdAt: new Date(2024, 4, 5)},
]
interface logoutProps{
  logout: () => void;
}

function Main({logout}:logoutProps) {

  return (
    <div>
      <Header
        logout={logout}
      />
      <div className='main'>
        {demodatas.map((data)=> (
            <List
              key={data.id}
              {...data}
            /> 
          ))}
      </div>
    </div>
  )
}

export default Main