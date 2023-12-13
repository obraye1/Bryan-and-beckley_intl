import { makeSource, defineDocumentType } from '@contentlayer/source-files';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.md',
  fields: {
    title: {
      type: 'string',
    },
    images: {
      type: 'string',
    },
    desc: {
      type: 'string',
    },
  },
  computedFields: {
    url_path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/pages\/?/, ''),
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: 'content',
  documentTypes: [Doc],
});
