<?php
namespace App;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;
use Stancl\Tenancy\Database\Models\Domain as BaseDomain;

class Domain extends BaseDomain
{
    use HasDatabase, HasDomains;

    public function setDomainAttribute($value)
    {
        $this->attributes['domain'] = strtolower($value.'localhost');
    }
}
