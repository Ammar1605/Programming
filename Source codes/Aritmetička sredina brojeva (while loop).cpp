//Izra�unati aritmeti�ku sredinu brojeva 1-n
#include <iostream>
using namespace std;
int main ()
{
    int i=1,n,a=0,b=0,c;
    cout<<"Unesite kraj intervala:\n";
    cin>>n;
    while (i<=n)
    {
          b=b+i;
          a++;
          i++;
    }
    c=b/a;
    cout<<"Aritmeti�ka sredina brojeva 1-"<<n<<" iznosi: "<<c<<endl;
    system ("pause");
    return 0;
}
