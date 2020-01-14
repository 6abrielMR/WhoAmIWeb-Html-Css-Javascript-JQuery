$(document).ready(function () {

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
    });

    let contents_imgs = $('.bxslider').children();
    let imgs = Array.prototype.slice.call(contents_imgs);

    imgs.forEach(img => {
        img.classList.add('imgs-cus');
    });

    // Posts
    let posts = [{
            title: 'Prueba de Titulo 1',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
        {
            title: 'Prueba de Titulo 2',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
        {
            title: 'Prueba de Titulo 3',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
        {
            title: 'Prueba de Titulo 4',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
        {
            title: 'Prueba de Titulo 5',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
        {
            title: 'Prueba de Titulo 6',
            date: 'Publicado el ' + moment().format('dddd') + ', ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') + ' a las ' + moment().format('HH:mm'),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusamus fugiat, voluptates dictacupiditate deleniti provident adipisci ducimus nemo architecto, voluptatibus expedita laborumvoluptate ea cum nostrum earum quos modi.Amet culpa modi vel quae quos necessitatibus quod? A dolor porro velit quas? Sapiente doloresaliquam ab explicabo id? Et animi neque, ipsam incidunt nesciunt nihil aliquam corrupti illo officiis?'
        },
    ]

    posts.forEach(item => {
        let post = `
        <article class="posts">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="btn-more">Leer más</a>
        </article>`;

        $('#posts').append(post);
    });

});