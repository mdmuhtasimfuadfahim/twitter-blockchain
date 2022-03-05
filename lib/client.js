import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'h7jpbqlc',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skBp9jpQ8rC0FNUjvtbRQzy0MJNjtG5WSJfPaJBtIeBB0ePFqtCbwAHjNJUSQubstRt7LzX5BYGSC8OyfNe4lToc5uViuuU9zAo6UyXe3Yzbt9kLbAstRdcpJ69WtmQ1Y05CVFHNHQDI5P1LjiB8kSDnrPHdTo59tqhRfTQqnbcEZs6QmyZw',
    useCdn: false,
})