import React from "react";
import {
  Heart, MessageCircle, Send, Bookmark, BadgeCheck,
  Home, Search, Compass, Clapperboard, PlusSquare, User, Menu, SquarePen, X, Maximize2
} from 'lucide-react';
import "./App.css";
import logoinstagrao from "./assets/logo.jpg";
import avatarJim from "./assets/avatarJim.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-area">
       <img src={logoinstagrao} alt="Instagram" className="sidebar-logo" />
      </div>

      <nav className="nav-menu">
        <div className="nav-item"> <Home /> <span>Página Inicial</span> </div>
        <div className="nav-item"> <Search /> <span>Pesquisa</span> </div>
        <div className="nav-item"> <Compass /> <span>Explorar</span> </div>
        <div className="nav-item"> <Clapperboard /> <span>Reels</span> </div>
        <div className="nav-item"> <MessageCircle /> <span>Mensagens</span> </div>
        <div className="nav-item"> <Heart /> <span>Notificações</span> </div>
        <div className="nav-item"> <PlusSquare /> <span>Criar</span> </div>
        <div className="nav-item"> <User /> <span>Perfil</span> </div>
      </nav>

      <div className="nav-item more">
        <Menu /> <span>Mais</span>
      </div>
    </aside>
  );
};

const Storie = ({ user, avatar }) => {
  return (
    <div className="story-item">
      <div className="story-circle">


        <img src={avatar} alt={user} />
      </div>
      <span>{user}</span>

    </div>


  );
};
const Post = ({ usuario, avatar, imagem, legenda, verificado }) => {
  return (

    <div className="post">
      <div className="post-header">
        <img src={avatar} alt={usuario} className="avatar" />
        <strong>{usuario}</strong>
        {verificado && <BadgeCheck className="verified-icon" />}
      </div>

      <img src={imagem} alt="Conteúdo" className="post-image" />
      <div className="post-footer">
        <div className="icons">
        
          <Heart className="post-icon" />
          <MessageCircle className="post-icon" />
          <Send className="post-icon" />
          <Bookmark className="post-icon" />


        </div>
        <p><strong>{usuario}</strong> {legenda}</p>
        <div className="comments">Visualizar todos os comentários...</div>
      </div>
    </div>
  );
};



const Direct = () => {
  return (
    <div className="direct-container">
      {/* Cabeçalho do Chat */}
      <div className="direct-header">
        <span className="direct-title">Mensagens</span>
        <div className="direct-actions">
          <Maximize2 size={18} className="direct-icon" />
          <X size={22} className="direct-icon" />
        </div>
      </div>

      {/* Corpo do Chat */}
      <div className="direct-body">
        <p>Nenhuma mensagem encontrada.</p>
      </div>

      {/* Botão  */}
      <button className="new-message-btn">
        <SquarePen size={24} />
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="container-principal">

        <div className="stories-container">
          <Storie
            user="Creed Bratton"
            avatar="https://i.pinimg.com/736x/00/6b/17/006b172fa79525e27d1a9ce1b0fbe940.jpg"
          />

          <Storie
            user="Holly Flax"
            avatar="https://i.pinimg.com/736x/a8/ae/84/a8ae84e008fa8b5e8f1976e1caf92285.jpg"
          />


          <Storie
            user="Todd Packer"
            avatar="https://i.pinimg.com/1200x/16/08/5d/16085d06c387b24d909d1cabc47ae8f6.jpg"
          />


          <Storie
            user="Mose Schrute"
            avatar="https://i.pinimg.com/736x/b0/cd/58/b0cd585e92a317f8b0b5d57867ec3887.jpg"
          />


          <Storie
            user="Michael Scott"
            avatar="https://i.pinimg.com/736x/86/72/c6/8672c611762d0427515baa7a9dc281e9.jpg"
          />


          <Storie
            user="Toby Flenderson"
            avatar="https://i.pinimg.com/1200x/73/71/9b/73719b7d19e9931b467b8f6bf8158c99.jpg"
          />


          <Storie
            user="Andy Bernard"
            avatar="https://i.pinimg.com/736x/79/6f/a7/796fa754ad6f1445630cc3e96cadf183.jpg"
          />

        </div>


        <div className="feed">
          <Post
            usuario="Ryan Howard"
            avatar="https://i.pinimg.com/736x/d3/36/3b/d3363b2d6231f08cb6615da64c402af0.jpg"
            verificado={true}
            imagem="https://i.pinimg.com/736x/23/bc/af/23bcaf806caa8ea1b30cb8e848bbaaa9.jpg"
            legenda="Já pensou em ficar milionário? Link na bio!"
          />

          <Post
            usuario="Gabe Lewis"
            avatar="https://i.pinimg.com/736x/dd/36/d2/dd36d2a2d5886f47c8781a36083bcfcc.jpg"
            imagem="https://i.pinimg.com/736x/de/92/e1/de92e166c431ce7b75022a637f4b0851.jpg"
            legenda="Eu e meu amigo Stanley no escritório!"
          />

          <Post
            usuario="Jim Halpert"
            avatar={avatarJim}
            verificado={true}
            imagem="https://i.pinimg.com/736x/c7/9c/fb/c79cfb4bd66321a52abd0fe2e2a228a2.jpg"
            legenda="Não sei o que postar"
          />

           <Post
            usuario="Dwight Schrute"
            avatar="https://i.pinimg.com/1200x/87/eb/92/87eb92250046402673575902c2b2b371.jpg"
            verificado={false}
            imagem="https://i.pinimg.com/736x/18/50/dc/1850dcb732c9ca0e2dd6af3b78776255.jpg"
            legenda="Melhor gerente assistente regional da Dunder Mifflin"
          />

           <Post
            usuario="Michael Scott"
            avatar="https://i.pinimg.com/736x/86/72/c6/8672c611762d0427515baa7a9dc281e9.jpg"
            verificado={false}
            imagem="https://i.pinimg.com/1200x/10/c8/88/10c8884fe416b218e75ff78f9e508e19.jpg"
            legenda="😀​"
          />

           <Post
            usuario="Oscar Martinez"
            avatar="https://static.wikia.nocookie.net/dublagem/images/1/14/Oscar_Martinez.jpeg/revision/latest?cb=20230120214122&path-prefix=pt-br"
            verificado={false}
            imagem="https://i.pinimg.com/1200x/6b/f3/b7/6bf3b7c738b941a1d0647e86dcfbc293.jpg"
            legenda="Não sei o que postar"
          />

           <Post
            usuario="Robert California"
            avatar="https://static.wikia.nocookie.net/dublagem/images/f/f3/Robert_California.jpg/revision/latest?cb=20230120230223&path-prefix=pt-br"
            verificado={true}
            imagem="https://i.pinimg.com/736x/7d/38/12/7d38127750bde9a89d4815920f961b56.jpg"
            legenda="Avaliando"
          />


           <Post
            usuario="Michael Scott"
            avatar="https://i.pinimg.com/736x/86/72/c6/8672c611762d0427515baa7a9dc281e9.jpg"
            verificado={false}
            imagem="https://i.pinimg.com/736x/08/34/80/0834807b3d54e31eb86aa27bbf2e422d.jpg"
            legenda="Eu e ela"
          />

           <Post
            usuario="	Kevin Malone"
            avatar="https://static.wikia.nocookie.net/dublagem/images/1/1c/Kevin_Malone.jpg/revision/latest/scale-to-width-down/80?cb=20230120225741&path-prefix=pt-br"
            verificado={false}
            imagem="https://i.pinimg.com/736x/99/93/cc/9993cc06bc6ba13b00f8942d8485004a.jpg"
            legenda="🍰​"
          />

           <Post
            usuario="Pam Beesly"
            avatar="https://static.wikia.nocookie.net/dublagem/images/d/d9/Pam_Beesly.jpg/revision/latest/scale-to-width-down/80?cb=20230120213413&path-prefix=pt-br"
            verificado={true}
            imagem="https://i.pinimg.com/1200x/c7/3f/7b/c73f7b152a79be0c93bb03d6b0daee25.jpg"
            legenda="❤️​"
          />

           <Post
            usuario="Ryan Howard"
            avatar="https://i.pinimg.com/736x/d3/36/3b/d3363b2d6231f08cb6615da64c402af0.jpg"
            verificado={true}
            imagem="https://i.pinimg.com/736x/50/4c/64/504c648c8dcc817e1ab69cedcb10532f.jpg"
            legenda="De ontem"
          />
          <Direct />

        </div>




      </main>
    </div>
  );
}