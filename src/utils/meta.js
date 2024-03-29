export default function meta() {
    const metaObj = { meta: {} }
    if (!this.metaTags) {
        return metaObj
    }
    if (this.metaTags.title) {
        metaObj.title = this.metaTags.title
    }
    if (this.metaTags.description) {
        metaObj.meta.description = { name: 'description', content: this.metaTags.description }
    }
    if (this.metaTags.keywords) {
        metaObj.meta.keywords = { name: 'keywords', content: this.metaTags.keywords }
    }
    return metaObj
}
