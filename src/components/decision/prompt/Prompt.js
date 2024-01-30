const promptArr = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum ante et justo semper vehicula. Sed blandit nibh non semper aliquet. Etiam mattis vehicula arcu, eget fringilla nisi. Nam consectetur arcu ut orci laoreet ultricies. Fusce porttitor libero non massa rhoncus semper. Phasellus a ullamcorper felis. Sed elit orci, porta pharetra odio id, maximus suscipit nunc. Sed eu libero semper, sollicitudin ex eget, posuere augue. Sed aliquet volutpat pretium. Proin at ipsum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  "Ut eget tincidunt ex. Suspendisse potenti. Vestibulum faucibus ante lectus, dignissim condimentum justo mattis eu. Sed finibus, ligula ut pretium tincidunt, magna mi lobortis sem, in interdum eros felis a arcu. Quisque id dapibus eros. Proin finibus turpis et quam aliquet auctor. Mauris facilisis finibus est, ut ornare sem elementum ut. Sed sed malesuada nisl, nec condimentum diam. Aenean sem massa, accumsan non egestas quis, auctor et diam.",
  "Nunc mi sapien, sollicitudin sed enim quis, laoreet venenatis magna. Phasellus lacinia lobortis vestibulum. Donec maximus est neque, sed tempus lorem facilisis sed. Vestibulum sollicitudin orci id urna elementum, ut efficitur turpis tristique. Curabitur vel neque vel metus tristique commodo at eu lacus. Suspendisse vitae velit convallis, sodales risus sit amet, tincidunt lacus. Proin sem nulla, auctor in pharetra a, mollis scelerisque tortor. Fusce augue purus, semper non eleifend at, mattis sit amet nisi. Maecenas cursus lectus id consectetur posuere. Sed a ipsum id odio hendrerit iaculis.",
];

export function Prompt({ activeButton }) {
  return <div>{promptArr[activeButton - 1]}</div>;
}
