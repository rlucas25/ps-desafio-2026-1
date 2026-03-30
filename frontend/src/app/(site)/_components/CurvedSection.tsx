export default function CurvedSection({
    style,
    color = "145 64% 11%",
    width = 300,
    height = 300,
    //radius = 100
}) {
    return (
        <svg style={style} width={width} height={height} viewBox="0 0 105 105">
            <g transform="scale(-1, 1) translate(-105, 0)">
                <path
                    d="
          M0 0
          H200
          V200
          H0
          V100
          A100 100 0 0 0 100 0
          Z
        "
                    fill={color}
                />
            </g>
        </svg>
    );
}