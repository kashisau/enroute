/**
 * Medium Parser
 * 
 * Takes a medium username and parses the JSON object that is returned in a way
 * that the En route site can digest.
 * 
 * @author Kashi Samaraweera <kashi@kashis.com.au>
 * 
 */
class MParse {

    getArticles(mObj) {
        const mBlocker = /^[^\{]*/i;
        const filtered = mObj.replace(mBlocker, '');
        const data = JSON.parse(filtered);

        const posts = data.payload.references.Post;
        console.log(typeof posts);
        const filteredPosts = [];

        for (let postId in posts) {
            let post = posts[postId];
            filteredPosts.push({
                title: post.title,
                id: post.id,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                slug: post.slug,
                uniqueSlug: post.uniqueSlug,
                heroImage: `https://cdn-images-1.medium.com/freeze/max/2560/${post.virtuals.previewImage.imageId}`
            });
        }

        const orderedPosts = filteredPosts.sort((a, b) => b.createdAt - a.createdAt);

        return orderedPosts;
    }

}

export default MParse;