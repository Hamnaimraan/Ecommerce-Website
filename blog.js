// script.js

document.addEventListener("DOMContentLoaded", function() {
    fetchBlogPosts();
});

function fetchBlogPosts() {


    const blogPosts = [{
            title: "5 Must-Have Wardrobe Essentials for Every Fashionista",
            content: `
            Are you looking to elevate your style game and build a wardrobe that exudes sophistication and versatility? Look no further! In this blog post, we're sharing five timeless wardrobe essentials that every fashionista should own. 
      
            First on the list is the classic tailored blazer. Whether you're heading to the office or out for a casual brunch, a well-fitted blazer instantly adds polish to any outfit. Pair it with tailored trousers for a professional look or throw it over a casual tee for an effortlessly chic vibe.
      
            Next up, we have the little black dress (LBD). A staple in every fashion-forward woman's closet, the LBD is perfect for any occasion, from cocktail parties to date nights. Opt for a silhouette that flatters your figure and accessorize with statement jewelry for added glamour.
      
            No wardrobe is complete without a pair of sleek denim jeans. Versatile and easy to style, jeans are a go-to option for everyday wear. Whether you prefer skinny, straight-leg, or boyfriend fit, find a pair that fits like a glove and can take you from day to night with ease.
      
            For footwear, invest in a pair of timeless leather boots. Whether ankle or knee-high, leather boots add an instant dose of sophistication to any outfit. Pair them with dresses, skirts, or jeans for a chic and polished look.
      
            Last but not least, every fashionista needs a statement handbag to complete her ensemble. Whether it's a classic tote, a chic crossbody, or a trendy clutch, invest in a quality handbag that reflects your personal style and adds the finishing touch to your outfit.
      
            With these five wardrobe essentials in your arsenal, you'll be ready to conquer the fashion world with style and confidence!
          `,

        },
        {
            title: "The Art of Sustainable Fashion: How to Shop Ethically and Stylishly",
            content: `
            As consumers become more conscious of the environmental and ethical impact of their fashion choices, the demand for sustainable clothing options is on the rise. In this blog post, we delve into the art of sustainable fashion and provide practical tips on how to shop ethically without compromising on style.
      
            First and foremost, prioritize quality over quantity. Invest in well-made pieces that are designed to last, rather than fast fashion items that are cheaply made and quickly discarded. Look for garments made from sustainable materials such as organic cotton, bamboo, or recycled fabrics.
      
            When shopping for new additions to your wardrobe, consider the ethical practices of the brands you support. Research brands that are committed to fair labor practices, transparent supply chains, and environmental sustainability. Support small businesses and independent designers who prioritize craftsmanship and ethical production methods.
      
            Another way to embrace sustainable fashion is by shopping secondhand. Thrifting is not only budget-friendly but also reduces the demand for new clothing production and minimizes textile waste. Explore vintage stores, consignment shops, and online resale platforms for unique finds that add character to your wardrobe.
      
            In addition to shopping consciously, consider extending the lifespan of your clothing through care and maintenance. Learn how to mend and repair garments, launder them responsibly, and store them properly to ensure they remain in good condition for years to come.
      
            By adopting these principles of sustainable fashion, you can make a positive impact on the planet while still looking chic and fashionable. Join the movement towards a more sustainable and stylish future!
          `
        },
        {
            title: "Mastering the Art of Effortless Elegance: Tips for Timeless Style",
            content: `
            Elegance never goes out of style! In this blog post, we're sharing our top tips for mastering the art of effortless elegance and achieving a timeless sense of style.
      
            First and foremost, invest in quality wardrobe staples that stand the test of time. Look for classic pieces that are well-made and versatile, such as a tailored blazer, a crisp white button-down shirt, and a well-fitted pair of trousers. These timeless essentials form the foundation of a chic and sophisticated wardrobe.
      
            When it comes to color palette, stick to neutral tones and timeless hues that are easy to mix and match. Opt for shades like black, white, navy, and camel, which exude sophistication and can be effortlessly paired together for a polished look.
      
            Embrace the power of minimalism by keeping your outfits streamlined and understated. Avoid excess embellishments and overly trendy pieces, and instead focus on clean lines and simple silhouettes that highlight your natural elegance.
      
            Accessorize thoughtfully with timeless pieces that add a touch of refinement to your ensemble. Invest in classic jewelry, such as a strand of pearls or a pair of gold hoop earrings, that can be worn season after season without going out of style.
      
            Finally, exude confidence and grace in everything you wear. True elegance comes from within, so carry yourself with poise and grace, and let your inner beauty shine through. With these tips, you'll be well on your way to mastering the art of effortless elegance and embracing a timeless sense of style.
          `
        }
    ];


    const blogPostsContainer = document.getElementById("blog-posts");


    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            
            <div class="blog-content">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}