export const getAddPostpage = (req, res) => {
    res.render('add_post');
};

export const getAboutPage = (req, res) => {
    res.render('about');
};

export const getIndexPage = (req, res) => {
    res.render('index');
};

export const getSingleBlogPage = (req, res) => {
    res.render('post');
};
