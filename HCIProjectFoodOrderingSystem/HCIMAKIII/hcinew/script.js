window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
  
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  function showDetails(dish) {
    const modal = document.getElementById('detailsModal');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');
    const image = document.getElementById('modalImage');
  
    const dishDetails = {
      truffle: {
        title: 'Truffle Pasta',
        text: 'A decadent dish made with handmade pasta, infused with earthy black truffle oil, cream, and parmesan cheese.',
        img: 'images/truffle-pasta.jpg'
      },
      filet: {
        title: 'Filet Mignon',
        text: 'Premium beef tenderloin grilled to perfection, served with garlic mashed potatoes and seasonal vegetables.',
        img: 'images/filet-mignon.jpg'
      },
      risotto: {
        title: 'Seafood Risotto',
        text: 'Creamy risotto with shrimp, scallops, calamari, saffron, and a touch of lemon zest.',
        img: 'images/seafood-risotto.jpg'
      },
      lava: {
        title: 'Chocolate Lava Cake',
        text: 'A rich chocolate cake with a gooey molten center, served with vanilla bean ice cream.',
        img: 'images/lava-cake.jpg'
      },
      lobster: {
        title: 'Lobster Thermidor',
        text: 'Succulent lobster meat in creamy wine sauce, baked in shell.',
        img: 'images/lobster-thermidor.jpg'
      },
      wagyu: {
        title: 'Wagyu Burger',
        text: 'Juicy Wagyu beef burger with truffle aioli and caramelized onions.',
        img: 'images/wagyu-burger.jpg'
      },
      salmon: {
        title: 'Grilled Salmon',
        text: 'Fresh salmon grilled to perfection, served with lemon dill sauce and asparagus.',
        img: 'images/grilled-salmon.jpg'
      },
      lasagna: {
        title: 'Vegetarian Lasagna',
        text: 'Hearty lasagna layered with roasted vegetables, ricotta, and béchamel sauce.',
        img: 'images/vegetarian-lasagna.jpg'
      }
    };
  
    const selected = dishDetails[dish];
  
    if (selected && modal && title && text && image) {
      title.textContent = selected.title;
      text.textContent = selected.text;
      image.src = selected.img;
      image.alt = selected.title;
      modal.style.display = 'block';
    } else {
      console.error('Dish details not found or modal elements missing.');
    }
  }
  
  
  function closeDetails() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
  
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }