const videosList = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/pwCaaico9M8',
    image: '../images/video/1.jpg',
    title: 'Tâm Sự Tuổi 30 - Trịnh Thăng Bình'
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/ejzGz84KG4I',
    image: '../images/video/2.jpg',
    title: 'Đời Dạy Tôi - OnLy C'
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/UX5oj9isGPM',
    image: '../images/video/3.jpg',
    title: 'Thấy Là Yêu Thương - OnLy C'
  },
  {
    id: 4,
    
    image: '../images/video/4.jpg',
    url: 'https://www.youtube.com/embed/V9S5QPbzPoo',
    title: 'Cùng Anh - Ngọc Dolil'
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/2dMOgvytko4',
    image: '../images/video/5.jpg',
    title: 'Ý Em Sao - Kay Tran x Lang LD x Homeie Boiz'
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/nHK0u40Ompc',
    image: '../images/video/6.jpg',
    title: 'Cô Gái m52 - Huy ft. Tùng Viu'
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/SItFPrgEITM',
    image: '../images/video/7.jpg',
    title: 'Ngắm Hoa Lệ Rơi - Châu Khải Phong'
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/3UlG5chR8jc',
    image: '../images/video/8.jpg',
    title: 'Chàng Trai Đang Thất Tình - Đạt G ft Binz'
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/FkhXlUB08EI',
    image: '../images/video/9.jpg',
    title: 'Anh Muốn Nghe Giọng Anh Nói - Nguyên x LYM x Seth'
  },
  {
    id: 10,
    url: 'https://www.youtube.com/embed/oQloICZUz20',
    image: '../images/video/10.jpg',
    title: 'Điều Anh Muốn - JayKii'
  },
]

index = 0;
function nextvideo() {
  if (index < videosList.length - 1) {
    index = index + 1;
    document.getElementById('set-href').setAttribute('src', videosList[index].url);
  }
}

function backvideo() {
  if (index > 0) {
    index = index - 1;
    document.getElementById('set-href').setAttribute('src', videosList[index].url);
  }
}

let listVideo = document.getElementById('list-video');
for (let item of videosList) {
  let videoItem = document.createElement('li');
  let img = document.createElement('img');
  let txt = document.createElement('p');
  txt.innerHTML = item.title;
  txt.className = ('title-video');
  videoItem.className = ('item-video');
  videoItem.onclick = function() { 
    btnClick(item.id);
  };
  listVideo.appendChild(videoItem);
  img.setAttribute('src', item.image);
  videoItem.appendChild(img);
  videoItem.appendChild(txt);

  function btnClick(num) {
    document.getElementById('set-href').setAttribute('src', videosList[num].url);
  }
};