import * as React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from '../components/common/List';
import ListItem from '../components/common/ListItem.js'

const lectures = [
    {
        title: "Lecture 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula massa, placerat eu ultricies ut, tincidunt vitae justo. Nunc congue ligula a elit ullamcorper, in.",
        date: "January 1, 2021",
        link: "www.example.com"
    },
    {
        title: "Lecture 2",
        description: "Data visualization",
        date: "January 3, 2021",
        link: "www.example.com"
    },
    {
        title: "Lecture 3",
        description: "Correlations",
        date: "January 8, 2021",
        link: "www.example.com"
    },
    {
        title: "Lecture 4",
        description: "Data ethics",
        date: "January 10, 2021",
        link: "www.example.com"
    }
]


const LecturesPage = () => (
    <Layout>
        <SEO title="Lectures" />
        <div>
            <List>
                {lectures.map((lecture) => (
                    <ListItem props={lecture} />
                ))}
            </List>
        </div>
    </Layout>
)
export default LecturesPage