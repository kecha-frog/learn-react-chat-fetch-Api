import React from "react"
export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    console.error({ error, info })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Произошла ошибка</h1>
    }

    return this.props.children
  }
}
