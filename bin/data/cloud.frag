#version 410

uniform sampler2D cloud;
in vec2 fragUV;
out vec4 outCol;
void main()
{
    outCol = texture(cloud, fragUV);
    if (outCol.a > 0.8) outCol.a = 0.8;
}
