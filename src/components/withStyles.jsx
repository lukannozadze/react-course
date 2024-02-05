export default function withStyles(Component) {
    const styles = {
      backgroundColor:'red'
    }
  return () => {
    console.log('fire');
    return <Component styles={styles} />;
  };
}
