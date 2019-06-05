export const booksCall = `
	books: allMarkdownRemark(filter: {collection: {eq: "books"}}) {
		edges {
			node {
				id
				frontmatter {
					date
					title
					
				}
			}
		}
	}
`;

export const todosCall = `
    todos: allMarkdownRemark(filter: {collection: {eq: "todos"}}) {
			edges {
				node {
				id
				frontmatter {
					date
					title
					done
				}
			}
		}
	}
`;