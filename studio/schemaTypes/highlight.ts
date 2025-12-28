import {defineField, defineType} from 'sanity'
import {HighlightIcon} from '@sanity/icons'

export const highlight = defineType({
  name: 'highlight',
  title: 'Highlight',
  type: 'document',
  icon: HighlightIcon,
  fields: [
    defineField({
      name: 'highlight',
      title: 'Main Highlight',
      type: 'reference',
      to: {type: 'blog'},
    }),
    defineField({
      name: 'subhighlights',
      title: 'Sub Highlights',
      type: 'array',
      validation: (Rule) => Rule.max(2).error('Можна додати не більше 2 постів'),
      of: [
        defineField({
          name: 'highlight',
          title: 'Highlight',
          type: 'reference',
          to: {type: 'blog'},
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Highlights',
      }
    },
  },
})
