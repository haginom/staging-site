export default {
  title: 'Blog post',
  name: 'blogPost',
  type: 'document',
  fields: [
    // fields must be defined, and it must be an array
    {
      name: 'blogTitle', // field name is required and must be unique
      type: 'string', // field type is required
    },
    {
      name: 'blogContent',
      type: 'text',
    },
  ],
}
