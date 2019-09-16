import React from 'react';

class Accordion extends React.Component {
  static defaultProps = { sections: [] }
  state = {
    sectionIndex: null,
  }
  handleActiveSection(index) {
    this.setState({ sectionIndex: index })
  }
  renderItem(section, index, sectionIndex) {
    return (
      <li className='Accordion__item' key={index}>
        <button
          type='button'
          onClick={() => this.handleActiveSection(index)}
        >
          {section.title}
        </button>
        {(sectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }
  render() {
    const { sectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, index) =>
            this.renderItem(section, index, sectionIndex)
          )}
      </ul>
    )
  }
}

export default Accordion;