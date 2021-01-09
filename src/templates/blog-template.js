/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { slug } from 'github-slugger'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogTemplate = ({ data: { mdx } }) => {
  const { t } = useTranslation('blog')

  return (
    <Fragment>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <Layout path={mdx.frontmatter.slug}>
        <div sx={{ maxWidth: 768 }}>
          <Themed.h1>{mdx.frontmatter.title}</Themed.h1>
          📅 <b>{mdx.frontmatter.date}</b>
          <br />⌚ <i>{`${mdx.timeToRead} ${t(['blog:m', 'min read'])}`}</i>
          <Themed.p>{mdx.frontmatter.foreword}</Themed.p>
          <div sx={{ variant: 'paper' }}>
            <b>{t(['blog:content', 'Content'])}</b>
            <Themed.ul>
              {mdx.headings
                .filter((link) => link.depth === 2)
                .map((link, i) => {
                  return (
                    <li key={i}>
                      <Themed.a href={`#${slug(link.value)}`}>
                        {link.value}
                      </Themed.a>
                    </li>
                  )
                })}
            </Themed.ul>
          </div>
          <div>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default BlogTemplate

export const query = graphql`
  query Post($locale: String!, $slug: String!, $dateFormat: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
        description
        foreword
        date(formatString: $dateFormat)
      }
      body
      headings {
        depth
        value
      }
      timeToRead
    }
  }
`
