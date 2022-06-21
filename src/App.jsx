import { Header } from './components/Header/Header';

import './global.css';
import styles from './App.module.css';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

const posts = [
  {
    id: 1,
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        id: 2,
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        id: 3,
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    published_at: new Date('2022-06-04T22:00:00'),
    author: {
      id: 1,
      name: 'Eduardo Munhoz',
      avatar_url:  'https://i.pinimg.com/564x/c5/5a/03/c55a037379006300ec2fed1012b516e9.jpg',
      role: 'Web Developer',
    }
  },
  {
    id: 2,
    content: [
      {
        id: 4,
        type: 'paragraph',
        content: 'Hey, there! 👋'
      },
      {
        id: 5,
        type: 'paragraph',
        content: 'Gostaria de compartilhar o projeto de feed de comentários desenvolvido junto com o curso Ignite da Rockeseat..'
      },
      {
        id: 6,
        type: 'paragraph',
        content: 'Obrigado! :)'
      },
      {
        id: 7,
        type: 'paragraph',
        content: 'Segue o link:'
      },
      {
        id: 8,
        type: 'link',
        content: 'https://github.com/duhdev/Ignite-Feed'
      },
    ],
    published_at: new Date('2022-06-07T10:56:12'),
    author: {
      id: 2,
      name: 'Munhoz Eduardo',
      avatar_url: 'https://stringfixer.com/files/169052377.jpg',
      role: 'Back-End Developer',
    }
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                published_at={post.published_at}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}
