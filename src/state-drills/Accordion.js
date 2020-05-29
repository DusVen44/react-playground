import React, { Component } from 'react'


export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    }

    state = {
        activeSectionIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(section, index, activeSectionIndex) {
        return (
            <li className='Accordion-item' key={index}>
                <button
                  type='button'
                  onClick={() => this.handleSetActiveSection(index)}
                >
                  {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <div>
                <ul className='Accordion'>
                  {sections.map((section, index) =>
                   this.renderItem(section, index, activeSectionIndex)
                   )}    
                </ul> 
            </div>
        )
    }
}
